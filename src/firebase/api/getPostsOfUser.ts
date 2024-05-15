import { getDocs } from 'firebase/firestore'

import { userPostsQuery } from '../queries'

const getPostsOfUser = async (userEmail: string) => {
  const userPostsSnapshot = await getDocs(userPostsQuery(userEmail))
  const postsIds = userPostsSnapshot.docs.map((doc) => doc.id)

  return postsIds
}

export default getPostsOfUser
