'use client'

import { ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'

import { defineCrossIcon, defineSearchIcon } from '@/helpers/defineIconsForSearch'
import { useAppDispatch } from '@/store/hooks'
import {
  removeUsersSearchText,
  selectUsersSearchText,
  setUsersSearchText,
} from '@/store/slices/searchUsersSlice'
import { selectTheme } from '@/store/slices/themeSlice'
import { selectReadonlyUsers, setUsers } from '@/store/slices/usersSlice'

import * as S from './styled'

const UsersSearch = () => {
  const t = useTranslations('friends')
  const usersSearchText = useSelector(selectUsersSearchText)
  const readOnlyUsers = useSelector(selectReadonlyUsers)
  const theme = useSelector(selectTheme)
  const dispatch = useAppDispatch()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(setUsersSearchText(e.target.value))

  const handleClearSearch = () => {
    dispatch(removeUsersSearchText())
    dispatch(setUsers(readOnlyUsers))
  }

  return (
    <S.SearchContainer>
      <S.InputContainer>
        <S.SearchInput placeholder={t('search')} value={usersSearchText} onChange={handleChange} />
        {usersSearchText && (
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
    </S.SearchContainer>
  )
}

export default UsersSearch
