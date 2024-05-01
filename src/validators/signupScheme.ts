import { z } from 'zod'

export const signupScheme = z
  .object({
    name: z
      .string()
      .min(2, 'Name should have at least 2 symbols')
      .max(25, 'Name should be not more than 25 symbols'),
    secondName: z
      .string()
      .min(2, 'Second name should have at least 2 symbols')
      .max(25, 'Second name should be not more than 30 symbols'),
    email: z.string().email("This email doesn't exist"),
    password: z.string().min(8, 'Password should have at least 8 symbols'),
  })
  .required()

export type SignupSchemeType = z.infer<typeof signupScheme>
