'use client'

import BooleanSorts from './BooleanSorts'
import CategoriesSort from './CategoriesSort'
import RatingSort from './RatingSort'
import * as S from './styled'

const PostsSort = () => {
  return (
    <S.SortContainer>
      <S.SortTitle>Сортировка постов</S.SortTitle>
      <CategoriesSort />
      <BooleanSorts />
      <RatingSort />
    </S.SortContainer>
  )
}

export default PostsSort
