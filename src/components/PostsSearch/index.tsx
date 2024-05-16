'use client'

import { ChangeEvent } from 'react'
import { useSelector } from 'react-redux'

import { defineCrossIcon, defineSearchIcon } from '@/helpers/defineIconsForSearch'
import { useAppDispatch } from '@/store/hooks'
import { selectReadonlyPosts, setPosts } from '@/store/slices/postsSlice'
import { selectSearchText, setSearchText } from '@/store/slices/searchOptionsSlice'
import { selectTheme } from '@/store/slices/themeSlice'

import SearchOptions from '../SearchOptions'

import * as S from './styled'

const PostsSearch = () => {
  const searchText = useSelector(selectSearchText)
  const readOnlyPosts = useSelector(selectReadonlyPosts)
  const theme = useSelector(selectTheme)
  const dispatch = useAppDispatch()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => dispatch(setSearchText(e.target.value))

  const handleClearSearch = () => {
    dispatch(setSearchText(''))
    dispatch(setPosts(readOnlyPosts))
  }

  return (
    <S.SearchContainer>
      <S.InputContainer>
        <S.SearchInput placeholder='Поиск постов' value={searchText} onChange={handleChange} />
        {searchText && (
          <S.CrossIcon
            src={defineCrossIcon(theme)}
            alt='remove text icon'
            width={18}
            height={18}
            onClick={handleClearSearch}
          />
        )}
        <S.SearchButton>
          <S.Icon src={defineSearchIcon(theme)} alt='search button icon' width={22} height={22} />
        </S.SearchButton>
      </S.InputContainer>
      <SearchOptions />
    </S.SearchContainer>
  )
}

export default PostsSearch
