'use client'

import { useEffect, useState } from 'react'
import { DocumentData } from 'firebase/firestore'
import Image from 'next/image'

import getFilesFromStorage from '@/firebase/api/getFilesFromStorage'
import getPost from '@/firebase/api/getPost'

import * as S from './styled'
import { SelectedPostProps } from './types'

const SelectedPost = ({ postId }: SelectedPostProps) => {
  const [currentPost, setCurrentPost] = useState<DocumentData>()
  const [fileLinks, setFileLinks] = useState<string[]>([])

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(postId)
      setCurrentPost(post)
    }
    fetchPost()
  }, [postId])

  useEffect(() => {
    const getFile = async (photoLinks: string[]) => {
      const downloadedFiles = await getFilesFromStorage(photoLinks)
      setFileLinks(downloadedFiles)
    }

    if (currentPost?.files) getFile(currentPost?.files)
  }, [currentPost])

  if (!currentPost) return <div>Loading post...</div>

  return (
    <S.PostContainer>
      {fileLinks && fileLinks.length > 0 && (
        <div>
          {fileLinks.map((file) => (
            <Image key={file} src={file} alt={`post image ${file}`} width={400} height={300} />
          ))}
        </div>
      )}
    </S.PostContainer>
  )
}

export default SelectedPost
