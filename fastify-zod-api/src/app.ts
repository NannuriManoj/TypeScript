import Fastify from 'fastify'
import userRoutes from './routes/users/index.js'
import healthRoutes from './routes/health/index.js'

export function buildApp() {
  const app = Fastify({ logger: true })

  app.register(healthRoutes)
  app.register(userRoutes, { prefix: '/users' })

  return app
}