import { PostWithId } from '@/types/postType'

const filterPostsByCategories = (readonlyPosts: PostWithId[], categories: string[]) => {
  return readonlyPosts.filter(({ postData }) => {
    return categories.some((category) => category === postData.category)
  })
}

export default filterPostsByCategories
