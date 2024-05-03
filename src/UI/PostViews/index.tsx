'use client'

import { useSelector } from 'react-redux'
import Image from 'next/image'

import { selectTheme } from '@/store/slices/themeSlice'

import defineEyeIcon from './defineEyeIcon'
import { PostViewsProps } from './types'

const PostViews = ({ visibility }: PostViewsProps) => {
  const theme = useSelector(selectTheme)

  return (
    <>
      {visibility === 'private' ? (
        <Image
          src={defineEyeIcon(theme)}
          alt='eye icon'
          title='This post is private'
          quality={100}
          width={20}
          height={20}
        />
      ) : null}
    </>
  )
}

export default PostViews
