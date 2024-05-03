'use client'

import { memo } from 'react'

import defineCategoryIcon from './helpers'
import { Category, CategoryContainer, Icon } from './styled'
import { PostCategoryProps } from './types'

const PostCategory = ({ category }: PostCategoryProps) => {
  const CategorytIcon = defineCategoryIcon(category)

  return (
    <CategoryContainer>
      <Category>{category}</Category>
      {CategorytIcon && (
        <Icon src={CategorytIcon} alt='category icon' quality={100} width={20} height={20} />
      )}
    </CategoryContainer>
  )
}

export default memo(PostCategory)
