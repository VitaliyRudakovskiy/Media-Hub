import { z } from 'zod'

const loginScheme = z
  .object({
    email: z.string().email('Email should match testemail@domain.com'),
    password: z.string().min(8, 'Password should have at least 8 characters'),
  })
  .required()

export default loginScheme
