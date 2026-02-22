import type { FastifyRequest, FastifyReply } from "fastify";
import type {
    CreateTodoInput,
    UpdateTodoInput,
    TodoIdParam,
    Todo
} from "./schema.js";
import { createTodoSchema, todoIdParamSchema, updateTodoSchema } from "./schema.js";

let todos: Todo[] = [];
let nextId = 1;

export async function createTodoHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const body = createTodoSchema.parse(request.body)

  const newTodo: Todo = {
    id: nextId++,
    title: body.title,
    description: body.description,
    completed: false,
  }

  todos.push(newTodo)

  reply.code(201)
  return newTodo
}

    export async function listTodosHandler(){
        return todos;
    }

export async function updateTodoHandler(
    request: FastifyRequest,
    reply: FastifyReply) {
        const { id } = todoIdParamSchema.parse(request.params);
        const body = updateTodoSchema.parse(request.body);

        const todo = todos.find(todo => todo.id === id);

        if (!todo) {
            reply.status(404).send({ message: 'Todo not found' });
            return;
        }

        if (body.title !== undefined) todo.title = body.title;
        if (body.description !== undefined) todo.description = body.description;
        if (body.completed !== undefined) todo.completed = body.completed;

        reply.send(todo);
    }

