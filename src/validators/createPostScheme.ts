import { z } from 'zod';

export const createPostScheme = z
  .object({
    title: z
      .string()
      .min(2, 'Name should have at least 2 symbols')
      .max(25, 'Name should be not more than 25 symbols'),
    category: z.string(),
    tags: z.string(),
  })
  .required();

export type CreatePostType = z.infer<typeof createPostScheme>;
