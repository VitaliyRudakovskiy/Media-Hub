import { Dispatch, SetStateAction } from 'react'

import { NewFileType } from '../EditPostForm/types'

export type EditPostFilesProps = {
  fileLinks: string[]
  updatedFiles: NewFileType[]
  setUpdatedFiles: Dispatch<SetStateAction<NewFileType[]>>
}

export type StyledImageProps = {
  $toDelete: boolean
}
