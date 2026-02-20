import type { FastifyInstance } from "fastify";

async function petRoutes(fastify : FastifyInstance) {
    fastify.get('/pets', async() => {
        const pets = fastify.storage.getAllPets();
        return { pets };
    })

    fastify.get<{ Params: { id: number } }>('/pets/:id', async(request, reply) => {
        const { id } =request.params;
        const pet = fastify.storage.getPet(id);

        if(!pet){
            reply.code(404).send({ error: "Pet Not found"});
            return;
        }
        return pet;
    })

    fastify.post<{ Body: {name: string, type: string, age: number} }>('/pets', async(request, reply) => {
        const { name, type, age } = request.body;

        if(!name || !type || !age){
            reply.code(400).send({ error: "Pass the details of the pet" });
            return;
        }

        const newPet = fastify.storage.addPet({ name, type, age});
        reply.code(201).send({ pet: newPet });
    })

    fastify.delete<{ Params: {id : number} }>('/pets/:id', async(request, reply) => {
        const { id } = request.params;
        const remove = fastify.storage.removePet(id);
        if(!remove){
            reply.code(404).send({ error: "Pet not found"});
            return;
        }
        return { message: "Pet adopted..."}
    })
}

export default petRoutes;