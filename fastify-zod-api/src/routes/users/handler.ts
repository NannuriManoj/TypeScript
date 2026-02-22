import type { FastifyRequest, FastifyReply } from 'fastify'
import { getUserParamsSchema } from './schema.js'

export async function getUserHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const params = getUserParamsSchema.parse(request.params)

  return {
    id: params.id,
    name: 'Manoj'
  }
}