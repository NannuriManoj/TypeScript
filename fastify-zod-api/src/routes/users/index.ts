import type { FastifyPluginAsync } from 'fastify'
import { getUserHandler } from './handler.js'

const userRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get('/:id', getUserHandler)
}

export default userRoutes