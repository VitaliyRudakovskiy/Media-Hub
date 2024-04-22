import { z } from 'zod';

export const editPasswordScheme = z
  .object({
    email: z.string().email("This email doesn't exist"),
    oldPassword: z.string(),
    newPassword: z.string().min(8, 'Password should have at least 8 symbols'),
    confirmPassword: z.string().min(8, 'Password should have at least 8 symbols'),
  })
  .required()
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type EditPasswordSchemeType = z.infer<typeof editPasswordScheme>;
