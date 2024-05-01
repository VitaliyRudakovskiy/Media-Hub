'use client'

import { useEffect, useState } from 'react'
import { onSnapshot } from 'firebase/firestore'

import { commentsQuery } from '@/firebase/queries'
import { CommentWithId } from '@/types/commentType'

import Comment from './Comment'
import { CommentsContainer } from './styled'
import { CommentsSectionProps } from './types'

const CommentsSection = ({ commentsIds, postId }: CommentsSectionProps) => {
  const [comments, setComments] = useState<CommentWithId[]>([])

  useEffect(() => {
    const unsubscribe = onSnapshot(commentsQuery, (snapshot) => {
      const fetchedComments = snapshot.docs.map((doc) => ({
        id: doc.id,
        commentData: doc.data(),
      })) as CommentWithId[]

      setComments(fetchedComments)
    })

    return () => unsubscribe()
  }, [postId, commentsIds])

  return (
    <CommentsContainer>
      {comments
        .filter(({ id }) => commentsIds.includes(id))
        .sort((a, b) => a.commentData.createdAt - b.commentData.createdAt)
        .map(({ id, commentData }) => (
          <Comment key={id} id={id} commentData={commentData} postId={postId} />
        ))}
    </CommentsContainer>
  )
}

export default CommentsSection
