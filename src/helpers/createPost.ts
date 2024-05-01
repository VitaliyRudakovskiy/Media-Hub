import { PostType } from '@/types/postType'
import { VisibilityType } from '@/types/visibilityType'

const createPost = (
  title: string,
  feedback: string,
  tags: string,
  category: string,
  rating: number,
  email: string,
  name: string,
  files: string[],
  visibility: VisibilityType
): PostType => {
  return {
    createdAt: Date.now(),
    title,
    feedback,
    tags,
    category,
    rating,
    email,
    name,
    files,
    likedBy: [],
    bookmarks: [],
    views: 0,
    repostTimes: 0,
    comments: [],
    visibility,
  }
}

export default createPost
