'use client'

import { useTranslations } from 'next-intl'

import BooleanSorts from './BooleanSorts'
import CategoriesSort from './CategoriesSort'
import RatingSort from './RatingSort'
import * as S from './styled'

const PostsSort = () => {
  const t = useTranslations('postsSort')

  return (
    <S.SortContainer>
      <S.SortTitle>{t('title')}</S.SortTitle>
      <CategoriesSort />
      <BooleanSorts />
      <RatingSort />
    </S.SortContainer>
  )
}

export default PostsSort
