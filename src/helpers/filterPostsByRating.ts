import { PostWithId } from '@/types/postType'

const filterPostsByRating = (posts: PostWithId[], ratingSort: string) => {
  return posts.sort((a, b) => {
    if (ratingSort === 'lowToHigh') return a.postData.rating - b.postData.rating
    else return b.postData.rating - a.postData.rating
  })
}

export default filterPostsByRating
