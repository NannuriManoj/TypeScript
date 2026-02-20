import Fastify from "fastify";
import storagePlugin from "./plugins/storage.plugin";
import petRoutes from "./routes/pets";
import logger from "./plugins/logger";

export async function buildApp(){
    const store = Fastify({ logger: true });

    await store.register(logger)
    await store.register(storagePlugin);
    await store.register(petRoutes, { prefix: '/api' })

    return store;
}