import type { FastifyPluginAsync } from "fastify";
import { randomUUID } from "crypto";

const requestContextPlugin: FastifyPluginAsync = async (fastify) => {
    fastify.decorateRequest("requestId", "");

    fastify.addHook("onRequest", async (request, reply) => {
        request.requestId = randomUUID();
    });
};

export default requestContextPlugin;