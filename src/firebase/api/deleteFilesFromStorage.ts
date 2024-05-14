import { DocumentData, DocumentReference, getDoc } from 'firebase/firestore'
import { deleteObject } from 'firebase/storage'

import { ref, storage } from '..'

const deleteFilesFromStorage = async (
  postRef: DocumentReference<DocumentData>,
  fileIndexes: number[]
) => {
  let filesToDelete = []

  try {
    const postSnapshot = await getDoc(postRef)
    const postData = postSnapshot.data()
    const filesIds: string[] = postData?.files

    filesToDelete = filesIds.filter((_, index) => fileIndexes.includes(index))

    for (let i = 0; i < filesToDelete.length; i++) {
      const fileRef = ref(storage, filesToDelete[i])
      await deleteObject(fileRef)
    }
  } catch (error) {
    throw Error(`An error occured while deleting file: ${error}`)
  }

  return filesToDelete
}

export default deleteFilesFromStorage
