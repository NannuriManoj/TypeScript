import type { FastifyInstance } from "fastify";
import { PetBodySchema, 
    PetBodyUpdateSchema, 
    PetIdParamSchema,
    type PetBody,
    type PetBodyUpdate,
    type PetIdParams
} from "../schemas/pet.schema";

async function petRoutes(fastify : FastifyInstance) {

    //get all route
    fastify.get('/pets', async() => {
        const pets = fastify.storage.getAllPets();
        return { pets };
    })

    // get by id route
    fastify.get('/pets/:id',
        {
            schema: {
                params: PetIdParamSchema
            }
        }, 
        async(request, reply) => {
        const { id } =request.params as PetIdParams;
        const pet = fastify.storage.getPet(id);

        if(!pet){
            reply.code(404).send({ error: "Pet Not found"});
            return;
        }
        return { pet };
    })

    fastify.post('/pets',
        {
            schema: {
                body: PetBodySchema
            }
        }, 
        async(request, reply) => {
        const { name, type, age } = request.body as PetBody;

        const newPet = fastify.storage.addPet({ name, type, age});
        reply.code(201).send({ pet: newPet });
    })
    fastify.put<{
        Params: PetIdParams;
        Body: PetBodyUpdate;
    }>(
        '/pets/:id',
    {
    schema: {
      params: PetIdParamSchema,
      body: PetBodyUpdateSchema,
    },
    },
    async (request, reply) => {
    const { id } = request.params;
    const updates = request.body;

    const pet = fastify.storage.getPet(id);
    if (!pet) {
      reply.code(404).send({ error: "Pet not found" });
      return;
    }

    const updatedPet = fastify.storage.updatePet(id, updates);
    return { pet: updatedPet };
  }
);


    fastify.delete('/pets/:id', 
        {
            schema: {
                params: PetIdParamSchema
            }
        },
        async(request, reply) => {
        const { id } = request.params as PetIdParams;
        const remove = fastify.storage.removePet(Number(id));
        if(!remove){
            reply.code(404).send({ error: "Pet not found"});
            return;
        }
        return { message: "Pet adopted..."}
    })
}

export default petRoutes;