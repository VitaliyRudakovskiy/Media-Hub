import { useEffect, useState } from 'react'
import { onSnapshot } from 'firebase/firestore'

import { publicPostsQueryOrderedByCreatedAt } from '@/firebase/queries'
import { PostWithId } from '@/types/postType'

const usePosts = () => {
  const [posts, setPosts] = useState<PostWithId[]>([])

  useEffect(() => {
    const unsubscribe = onSnapshot(publicPostsQueryOrderedByCreatedAt, (snapshot) => {
      const postData = snapshot.docs.map((doc) => ({
        id: doc.id,
        postData: doc.data(),
      })) as PostWithId[]

      setPosts(postData)
    })

    return unsubscribe
  }, [])

  return posts
}

export default usePosts
