import type { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import type {
  PetBody,
  PetBodyUpdate
} from '../schemas/pet.schema';

interface Pet extends PetBody {
  id: number;
}

async function storagePlugin(fastify: FastifyInstance) {
  const pets: Pet[] = [];
  let nextID = 1;

  fastify.decorate('storage', {
    addPet: (pet: PetBody): Pet => {
      const newPet: Pet = { id: nextID++, ...pet };
      pets.push(newPet);
      return newPet;
    },

    getAllPets: (): Pet[] => pets,

    getPet: (id: number): Pet | undefined =>
      pets.find(p => p.id === id),

    removePet: (id: number): boolean => {
      const index = pets.findIndex(p => p.id === id);
      if (index !== -1) {
        pets.splice(index, 1);
        return true;
      }
      return false;
    },

    updatePet: (
      id: number,
      updates: PetBodyUpdate
    ): Pet | undefined => {
      const pet = pets.find(p => p.id === id);
      if (!pet) return undefined;

      Object.assign(pet, updates);
      return pet;
    }
  });

  fastify.log.info('Storage shelves ready for pets...');
}

export default fp(storagePlugin);

declare module 'fastify' {
  interface FastifyInstance {
    storage: {
      addPet: (pet: PetBody) => Pet;
      getAllPets: () => Pet[];
      getPet: (id: number) => Pet | undefined;
      removePet: (id: number) => boolean;
      updatePet: (
        id: number,
        updates: PetBodyUpdate
      ) => Pet | undefined;
    };
  }
}
