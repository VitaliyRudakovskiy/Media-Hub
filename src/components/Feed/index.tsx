'use client'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { onSnapshot } from 'firebase/firestore'

import { postsQueryOrderedByCreatedAt } from '@/firebase/queries'
import { useAppDispatch } from '@/store/hooks'
import { selectPosts, setPosts, setReadonlyPosts } from '@/store/slices/postsSlice'
import { PostWithId } from '@/types/postType'
import Post from '@/UI/Post'

import { FeedWrapper, NoPosts } from './styled'

const Feed = () => {
  const posts = useSelector(selectPosts)
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setIsLoading(true)

    const unsubscribe = onSnapshot(postsQueryOrderedByCreatedAt, (snapshot) => {
      const postData = snapshot.docs.map((doc) => ({
        id: doc.id,
        postData: doc.data(),
      })) as PostWithId[]

      dispatch(setPosts(postData))
      dispatch(setReadonlyPosts(postData))
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [dispatch])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <FeedWrapper>
      {posts.length > 0 ? (
        posts.map(({ id, postData }) => <Post key={id} id={id} postData={postData} />)
      ) : (
        <NoPosts>No Posts yet. When they do, they&apos;ll show up here.</NoPosts>
      )}
    </FeedWrapper>
  )
}

export default Feed
