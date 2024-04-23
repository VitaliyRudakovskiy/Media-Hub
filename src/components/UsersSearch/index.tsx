'use client';

import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';

import Cross from '@/assets/images/cross.png';
import Lupa from '@/assets/images/lupa.png';
import { useAppDispatch } from '@/store/hooks';
import {
  removeUsersSearchText,
  selectUsersSearchText,
  setUsersSearchText,
} from '@/store/slices/searchUsersSlice';
import { selectReadonlyUsers, setUsers } from '@/store/slices/usersSlice';

import * as S from './styled';

const UsersSearch = () => {
  const usersSearchText = useSelector(selectUsersSearchText);
  const readOnlyUsers = useSelector(selectReadonlyUsers);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(setUsersSearchText(e.target.value));

  const handleClearSearch = () => {
    dispatch(removeUsersSearchText());
    dispatch(setUsers(readOnlyUsers));
  };

  return (
    <S.SearchContainer>
      <S.InputContainer>
        <S.SearchInput
          placeholder='Поиск пользователей'
          value={usersSearchText}
          onChange={handleChange}
        />
        {usersSearchText && (
          <S.CrossIcon
            src={Cross}
            alt='remove text icon'
            width={20}
            height={20}
            onClick={handleClearSearch}
          />
        )}
        <S.SearchButton>
          <S.Icon src={Lupa} alt='search button icon' width={30} height={30} />
        </S.SearchButton>
      </S.InputContainer>
    </S.SearchContainer>
  );
};

export default UsersSearch;
