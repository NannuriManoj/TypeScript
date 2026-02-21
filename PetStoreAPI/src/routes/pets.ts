import type { FastifyInstance } from 'fastify';
import {
  PetBodySchema,
  PetBodyUpdateSchema,
  PetIdParamSchema
} from '../schemas/pet.schema';

async function petRoutes(fastify: FastifyInstance) {

  fastify.get('/pets', async () => {
    return { pets: fastify.storage.getAllPets() };
  });

  fastify.get(
    '/pets/:id',
    {
      schema: {
        params: PetIdParamSchema
      }
    },
    async (request, reply) => {
      const { id } = request.params;

      const pet = fastify.storage.getPet(id);
      if (!pet) {
        reply.code(404).send({ error: 'Pet not found' });
        return;
      }

      return { pet };
    }
  );

  fastify.post(
    '/pets',
    {
      schema: {
        body: PetBodySchema
      }
    },
    async (request, reply) => {
      const pet = fastify.storage.addPet(request.body);
      reply.code(201).send({ pet });
    }
  );

  fastify.put(
    '/pets/:id',
    {
      schema: {
        params: PetIdParamSchema,
        body: PetBodyUpdateSchema
      }
    },
    async (request, reply) => {
      const { id } = request.params;
      const updates = request.body;

      const updatedPet = fastify.storage.updatePet(id, updates);
      if (!updatedPet) {
        reply.code(404).send({ error: 'Pet not found' });
        return;
      }

      return { pet: updatedPet };
    }
  );

  fastify.delete(
    '/pets/:id',
    {
      schema: {
        params: PetIdParamSchema
      }
    },
    async (request, reply) => {
      const { id } = request.params;

      const removed = fastify.storage.removePet(id);
      if (!removed) {
        reply.code(404).send({ error: 'Pet not found' });
        return;
      }

      return { message: 'Pet adopted...' };
    }
  );
}

export default petRoutes;
