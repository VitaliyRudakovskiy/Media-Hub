export type CommentType = {
  createdAt: number
  text: string
  name: string
  email: string
  likedBy: Array<string>
}

export type CommentWithId = {
  id: string
  commentData: CommentType
}
