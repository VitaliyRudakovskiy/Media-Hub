import { deleteDoc, doc, DocumentData, DocumentReference, getDoc } from 'firebase/firestore'

import { COMMENTS } from '../collections'

const deletePostComments = async (postRef: DocumentReference<DocumentData>) => {
  try {
    const postSnapshot = await getDoc(postRef)
    const postData = postSnapshot.data()
    const commentIds = postData?.comments

    if (postData && commentIds.length) {
      for (const id of commentIds) {
        const commentRef = doc(COMMENTS, id)
        await deleteDoc(commentRef)
      }
    }
  } catch (error) {
    throw new Error(`Error occured while deleting post comments: ${error}`)
  }
}

export default deletePostComments
