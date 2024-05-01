import { DocumentData, DocumentReference, getDoc } from 'firebase/firestore'
import { deleteObject } from 'firebase/storage'

import { ref, storage } from '..'

const deletePostFiles = async (postRef: DocumentReference<DocumentData>) => {
  const postDoc = await getDoc(postRef)
  const postData = postDoc.data()

  try {
    if (postData && postData.files) {
      for (const file of postData.files) {
        const fileRef = ref(storage, file)
        await deleteObject(fileRef)
      }
    }
  } catch (error) {
    throw Error(`An error while deleting post files: ${error}`)
  }
}

export default deletePostFiles
