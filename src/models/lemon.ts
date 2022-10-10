import * as z from "zod"

export const LemonModel = z.object({
  id: z.string(),
  type: z.string(),
})
