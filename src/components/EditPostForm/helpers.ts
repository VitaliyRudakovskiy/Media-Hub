import { NewFileType } from './types'

const defineResultFiles = (newFiles: NewFileType[]) => {
  const filesToDelete: number[] = []
  const filesToAdd: string[] = []

  newFiles.forEach(({ status, file, fileIndexToDelete }) => {
    if (status === 'new' && file) filesToAdd.push(file)
    else if (status === 'toDelete' && fileIndexToDelete !== undefined)
      filesToDelete.push(fileIndexToDelete)
  })

  return { filesToDelete, filesToAdd }
}

export default defineResultFiles
