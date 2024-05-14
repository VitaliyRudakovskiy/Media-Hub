import { PostType } from '@/types/postType'

export type EditPostFormProps = {
  postId: string
  postData: PostType
  handleClose: () => void
}

export type NewFileType = {
  status: 'new' | 'toDelete'
  file?: string
  fileIndexToDelete?: number
}
