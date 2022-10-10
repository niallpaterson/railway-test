import * as z from "zod"

export const AccountModel = z.object({
  id: z.string(),
  email: z.string(),
})
