'use client'

import CATEGORIES from '@/constants/categories'

import CategoryCard from './CategoryCard'
import * as S from './styled'

const CategoriesSort = () => {
  return (
    <S.CategoriesContainer>
      {CATEGORIES.map((category) => (
        <CategoryCard key={category} category={category} />
      ))}
    </S.CategoriesContainer>
  )
}

export default CategoriesSort
