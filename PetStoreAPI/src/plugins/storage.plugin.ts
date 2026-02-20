import type { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';

interface PetInput{
    name: string,
    type: string,
    age: number
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
        }
    }
}