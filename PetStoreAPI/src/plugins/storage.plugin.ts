import type { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';

interface PetInput{
    name: string | undefined,
    type: string | undefined,
    age: number | undefined
}

interface Pet extends PetInput{
    id: number
}

async function storagePlugin(fastify: FastifyInstance) {
    const pets: Pet[] = [];
    let nextID = 1;

    fastify.decorate('storage', {
        addPet: (pet: PetInput) => {
            const newPet: Pet = { id: nextID++, ...pet};
            pets.push(newPet);
            return newPet;
        },
        getAllPets: () => pets,
        getPet: (id: number):Pet | undefined => pets.find(p => p.id === id),
        removePet: (id: number): boolean => {
            const index = pets.findIndex(p => p.id === id);
            if(index !== -1){
                pets.splice(index,1);
                return true;
            }
            return false;
        },
        updatePet: (id: number, updates: Partial<PetInput>): Pet | undefined => {
        const pet = pets.find(p => p.id === id);
        if (!pet) return undefined;

        Object.assign(pet, updates);
        return pet;
        }

    })

    console.log("Storage shelves ready for pets...")
}

export default fp(storagePlugin);

declare module 'fastify' {
    interface FastifyInstance{
        storage: {
            addPet: (pet: PetInput) => Pet;
            getAllPets: ()=> Pet[];
            getPet: (id: number) => Pet | undefined;
            removePet: (id: number) => boolean;
            updatePet: (id: number, update: Partial<PetInput>) => Pet | undefined;
        }
    }
}