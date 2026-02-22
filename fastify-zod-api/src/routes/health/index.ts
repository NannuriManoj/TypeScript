import type { FastifyPluginAsync } from "fastify";

const heathPlugin: FastifyPluginAsync = async (fastify) => {
    fastify.get("/health", async (request, reply) => {
        return { 
            status: "ok",
            requestId: request.requestId
        }
    });
};

export default heathPlugin;