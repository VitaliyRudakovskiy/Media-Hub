import { Dispatch, SetStateAction } from 'react'

import { NewFileType } from '../EditPostForm/types'

export type AddNewFileProps = {
  newFiles: File[]
  setNewFiles: Dispatch<SetStateAction<File[]>>
  updatedFiles: NewFileType[]
  setUpdatedFiles: Dispatch<SetStateAction<NewFileType[]>>
}
