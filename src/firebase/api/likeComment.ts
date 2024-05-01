import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'

import { COMMENTS } from '../collections'

const likeComment = async (commentId: string, userId: string, isLiked: boolean) => {
  const commentRef = doc(COMMENTS, commentId)

  try {
    if (isLiked) {
      await updateDoc(commentRef, {
        likedBy: arrayRemove(userId),
      })
    } else {
      await updateDoc(commentRef, {
        likedBy: arrayUnion(userId),
      })
    }
  } catch (error) {
    throw new Error(`Error occured while liking comment: ${error}`)
  }
}

export default likeComment
