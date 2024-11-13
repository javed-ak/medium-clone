import z from 'zod';

export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string()
})

export const createBlogInput = z.object({
    title: z.string().min(3),
    content: z.string().min(20),
})

export const updateBlogInput = z.object({
    title: z.string().min(3),
    content: z.string().min(20),
})

export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreateBlogInput = z.infer<typeof createBlogInput>
export type UpdateeBlogInput = z.infer<typeof updateBlogInput>