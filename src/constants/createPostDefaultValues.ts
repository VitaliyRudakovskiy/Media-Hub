import { CreatePostType } from '@/validators/createPostScheme'

import CATEGORIES from './categories'

export const createPostDefaultValues: CreatePostType = {
  title: '',
  category: CATEGORIES[0],
  tags: '',
}
