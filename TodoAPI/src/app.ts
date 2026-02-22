import Fastify from "fastify";
import todoRoutes from "./routes/todos/index.js";

export function buildApp() {
  const app = Fastify({ logger: true });

  app.register(todoRoutes, { prefix: '/todos' });
  return app;
}