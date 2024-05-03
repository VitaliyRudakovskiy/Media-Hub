'use client'

import { memo } from 'react'

import { TagsContainer } from './styled'
import { PostTagsProps } from './types'

const PostTags = ({ tags }: PostTagsProps) => {
  const splittedTags = tags
    .split(',')
    .filter((tag) => tag.length > 0)
    .filter((tag, index, self) => self.indexOf(tag) === index)

  return (
    <TagsContainer>
      {splittedTags.map((tag, index) => (
        <span key={index}>
          #{tag}
          {index !== splittedTags.length - 1 && ', '}
        </span>
      ))}
    </TagsContainer>
  )
}

export default memo(PostTags)
