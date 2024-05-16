import { z } from 'zod'

import { TAGS } from '@/constants/regulars'

export const editPostScheme = z.object({
  title: z
    .string()
    .min(2, 'Name should have at least 2 symbols')
    .max(25, 'Name should be not more than 25 symbols'),
  feedback: z.string(),
  category: z.string(),
  tags: z
    .string()
    .regex(TAGS, 'This field should contain only letters, numbers and comma')
    .optional()
    .or(z.literal('')),
  visibility: z.string(),
})

export type EditPostType = z.infer<typeof editPostScheme>
