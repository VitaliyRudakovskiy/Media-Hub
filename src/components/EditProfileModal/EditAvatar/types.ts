import { Dispatch, SetStateAction } from 'react'

import { FileType } from '@/types/fileType'

export type EditAvatarProps = {
  setFile: Dispatch<SetStateAction<FileType | null>>
  fileName: string
  setFileName: Dispatch<SetStateAction<string>>
  fileRemovedTrigger: boolean
  setFileRemovedTrigger: Dispatch<SetStateAction<boolean>>
}
