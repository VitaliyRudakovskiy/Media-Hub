import { VisibilityType } from './visibilityType'

export type PostType = {
  createdAt: number
  title: string
  feedback: string
  category: string
  rating: number
  tags: string
  email: string
  name: string
  files: Array<string>
  likedBy: Array<string>
  bookmarks: Array<string>
  repostTimes: number
  comments: Array<string>
  visibility: VisibilityType
}

export type PostWithId = {
  id: string
  postData: PostType
}
