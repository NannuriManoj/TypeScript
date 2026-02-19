import Fastify from "fastify";
import { title } from "node:process";
const fastify = Fastify({ logger: true });
import { z } from "zod";

const todoSchema = z.object({
    title: z.string().min(3),
    completed: z.boolean(),
    priority: z.number().int().min(1).max(5).optional()
})

const start = async ()=>{
    try {
        await fastify.listen({port: 3000});
    } catch (error) {
        fastify.log.error(error);
    }
}

start();