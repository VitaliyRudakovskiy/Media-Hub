import { doc, updateDoc } from 'firebase/firestore'

import { POSTS } from '../collections'

const updatePostAuthors = async (postsIds: string[], newName?: string, newSecondName?: string) => {
  try {
    for (const postId of postsIds) {
      const postRef = doc(POSTS, postId)
      await updateDoc(postRef, { name: `${newName} ${newSecondName}` })
    }
  } catch (error) {
    throw new Error(`Error occured while updating post author name: ${error}`)
  }
}

export default updatePostAuthors
