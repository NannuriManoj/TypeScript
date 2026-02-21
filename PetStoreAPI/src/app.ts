import Fastify from 'fastify';
import storagePlugin from './plugins/storage.plugin';
import petRoutes from './routes/pets';
import logger from './plugins/logger';
import type {
  ZodTypeProvider
} from 'fastify-type-provider-zod';

export async function buildApp() {
  const app = Fastify({ logger: true })
    .withTypeProvider<ZodTypeProvider>();

  await app.register(logger);
  await app.register(storagePlugin);
  await app.register(petRoutes, { prefix: '/api' });

  return app;
}
