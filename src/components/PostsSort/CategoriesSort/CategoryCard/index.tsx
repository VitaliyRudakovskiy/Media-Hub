'use client'

import { useEffect, useState } from 'react'

import { useAppDispatch } from '@/store/hooks'
import { addCategory, removeCategory } from '@/store/slices/sortPostsSlice'

import * as S from './styled'
import { CategoryCardProps } from './types'

const CategoryCard = ({ category }: CategoryCardProps) => {
  const [isActive, setIsActive] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isActive) dispatch(addCategory(category))
    else dispatch(removeCategory(category))
  }, [category, isActive, dispatch])

  const handleToggleActive = () => setIsActive((prevActive) => !prevActive)

  return (
    <S.Card $isActive={isActive} onClick={handleToggleActive}>
      {category}
    </S.Card>
  )
}

export default CategoryCard
