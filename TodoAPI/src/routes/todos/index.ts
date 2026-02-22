import type { FastifyPluginAsync } from 'fastify'
import { createTodoHandler, listTodosHandler, updateTodoHandler  } from './handler.js'

const todoRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get('/', listTodosHandler)
  fastify.post('/', createTodoHandler)
  fastify.patch('/:id', updateTodoHandler)
}

export default todoRoutes