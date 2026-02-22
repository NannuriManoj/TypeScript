import { z } from "zod";

export const getUserParamsSchema = z.object({
    id: z.coerce.number().int().positive()
});

export const userResponseSchema = z.object({
    id: z.number().int().positive(),
    name: z.string(),
});

export type GetUserParams = z.infer<typeof getUserParamsSchema>;
export type UserResponse = z.infer<typeof userResponseSchema>;