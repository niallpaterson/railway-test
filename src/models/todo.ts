import * as z from "zod"

export const TodoModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  text: z.string(),
  completed: z.boolean(),
})
