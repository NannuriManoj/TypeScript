import { z } from 'zod';

// body schema
export const PetBodySchema = z.object({
    name: z.string().min(1),
    type: z.string().min(1),
    age: z.number().int().min(0).max(100)
})

// Params schema 
export const PetIdParamSchema = z.object({
    id: z.coerce.number().int().positive()
})

// update schema
export const PetBodyUpdateSchema = PetBodySchema.partial();

// Inferred types
export type PetBody = z.infer<typeof PetBodySchema>;
export type PetIdParams = z.infer<typeof PetIdParamSchema>;
export type PetBodyUpdate = z.infer<typeof PetBodyUpdateSchema>;