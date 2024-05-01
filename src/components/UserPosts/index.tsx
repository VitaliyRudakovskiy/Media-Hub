'use client'

import { useEffect, useState } from 'react'

import getUserPosts from '@/helpers/getUserPosts'
import usePosts from '@/hooks/usePosts'
import { PostWithId } from '@/types/postType'
import Post from '@/UI/Post'

import { NoPosts, UserPostsContainer } from './styled'
import { UserPostsProps } from './types'

const UserPosts = ({ userEmail }: UserPostsProps) => {
  const posts = usePosts()
  const [userPosts, setUserPosts] = useState<PostWithId[]>([])

  useEffect(() => {
    setUserPosts(getUserPosts(userEmail, posts))
  }, [posts, userEmail])

  return (
    <UserPostsContainer>
      {userPosts.length > 0 ? (
        userPosts.map(({ id, postData }) => <Post key={id} id={id} postData={postData} />)
      ) : (
        <NoPosts>This user doesn`t have any posts yet.</NoPosts>
      )}
    </UserPostsContainer>
  )
}

export default UserPosts
