// ITodo -> because it's a interface, just to know

import { z } from 'zod'

// runtime validation --ZOD SCHEMA
export const todoValidationSchema = z.object({
    id: z.string().describe('ID of the todo'),
    title: z.string().describe('title of the todo'),
    description: z.string().optional().describe('description for the todo'),
    isComplete: z.boolean().default(false).describe('if the todo item is complete or not')
})

// TYPE INTERFACE -- typescript
// ⚠️ line 8 & line 17 are same -- which voilate DRY Principle
// export interface ITodo {
//     id: string,
//     title: string,
//     description?: string
//     isComplete: boolean
// }


// So ZOD gives a method which will auto-generate line 17
export type Todo = z.infer<typeof todoValidationSchema>;
