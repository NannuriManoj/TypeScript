import { z } from 'zod';

// Input for POST /todos
export const createTodoSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
})

// Input for PATCH /todos/:id
export const updateTodoSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  completed: z.boolean().optional(),
})

// Params
export const todoIdParamSchema = z.object({
  id: z.coerce.number().int().positive(),
})

// Internal Todo model
export const todoSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string().optional(),
  completed: z.boolean(),
})

export type CreateTodoInput = z.infer<typeof createTodoSchema>
export type UpdateTodoInput = z.infer<typeof updateTodoSchema>
export type Todo = z.infer<typeof todoSchema>
export type TodoIdParam = z.infer<typeof todoIdParamSchema>