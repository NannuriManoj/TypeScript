import Fastify from "fastify";
import { error } from "node:console";
import { request } from "node:http";
import { todo } from "node:test";
const fastify = Fastify({ logger: true});
const PORT = 3000;

interface Todo {
    id: number,
    title: string,
    completed: boolean
}

// let todos: Todo[] = [];
// let nextId = 1; 

let todos: Todo[] = [
  { id: 1, title: "Learn Fastify", completed: false },
  { id: 2, title: "Learn Fastify", completed: false }, // duplicate title
  { id: 3, title: "Build Todo API", completed: false },
  { id: 4, title: "Build Todo API", completed: true }  // duplicate title
];

let nextId = 5;

// GET /todos - list all todos
fastify.get('/todos', async(request, reply) => {
    return { todos };
});

// GET /todos/:id - one todo item 
fastify.get<{ Params: {id: string} }>('/todos/:id', async(request, reply) => {
    const id = parseInt(request.params.id);
    const todo = todos.find(t => t.id === id);

    if(!todo){
        reply.code(404).send({ error: 'Todo not found'})
        return;
    }
    return { todo };
})

// POST /todos - Create new todo
fastify.post<{ Body: { title: string} }>('/todos', async(request, reply) => {
    const { title } = request.body;
    if(!title){
        reply.code(400).send({ error: 'Title not found' })
        return;
    }
    
    const newTodo = {
        id: nextId++,
        title: title.trim(),
        completed: false
    }

    todos.push(newTodo);
    reply.code(201).send({ todo: newTodo })
})

// PUT //todos/:id - Update todo
fastify.put<{
    Params: {id: string};
    Body: {title?: string; completed: boolean}
}>(
    '/todos/:id', async(request, reply)=>{
        const id = parseInt(request.params.id);
        const todoIndex = todos.findIndex(t => t.id === id);

        if(todoIndex === -1){
            reply.code(404).send({ error: "Todo not found"});
            return;
        }

        const todo = todos[todoIndex];
        if(!todo){
            reply.code(404).send({error: "Todo not found"});
            return;
        }

        const { title, completed } = request.body;

        if(title !== undefined){
            todo.title = title;
        }
        if(completed !== undefined){
            todo.completed = completed;
        }

        return todo;

    }
)

// DELETE /todos/:id - DELETE todo
fastify.delete<{Params: {id: string}}>('/todos/:id', async (request, reply) => {
    const id = parseInt(request.params.id);
    const todoIndex = todos.findIndex(t => t.id === id);

    if(todoIndex === -1){
        reply.code(404).send({error: "Todo not found"});
        return;
    }

    todos.splice(todoIndex,1);

    return { message: "Todo Deleted"};
})


const start = async ()=>{
    try {
        await fastify.listen({port: PORT});
    } catch (error) {
        fastify.log.error(error);
    }
}

start();