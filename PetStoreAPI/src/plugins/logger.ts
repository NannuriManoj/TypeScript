import fp from 'fastify-plugin';
import type { FastifyInstance } from 'fastify';

async function requestLoggerFunction(fastify: FastifyInstance) {
    fastify.addHook('preHandler',async(request) => {
        fastify.log.info({method: request.method, url: request.url}, "Incoming request")
    })
}

export default fp(requestLoggerFunction);