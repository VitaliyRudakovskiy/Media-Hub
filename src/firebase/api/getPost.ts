import { doc, getDoc } from 'firebase/firestore'

import { POSTS } from '../collections'

const getPost = async (postId: string) => {
  const postRef = doc(POSTS, postId)
  const postDoc = await getDoc(postRef)
  return postDoc?.data()
}

export default getPost
