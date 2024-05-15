import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'

import { POSTS } from '../collections'

const bookmarkPost = async (postId: string, userId: string, isBookmarked: boolean) => {
  const postRef = doc(POSTS, postId)

  try {
    if (isBookmarked) {
      await updateDoc(postRef, {
        bookmarks: arrayRemove(userId),
      })
    } else {
      await updateDoc(postRef, {
        bookmarks: arrayUnion(userId),
      })
    }
  } catch (error) {
    throw new Error(`Error occured while bookmarking post: ${error}`)
  }
}

export default bookmarkPost
