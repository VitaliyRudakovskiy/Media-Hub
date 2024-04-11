'use client';

import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';

import Cross from '@/assets/images/cross.png';
import Lupa from '@/assets/images/lupa.png';
import { useAppDispatch } from '@/store/hooks';
import { selectReadonlyPosts, setPosts } from '@/store/slices/postsSlice';
import { selectSearchText, setSearchText } from '@/store/slices/searchOptionsSlice';

import SearchOptions from '../SearchOptions';

import * as S from './styled';

const PostsSearch = () => {
  const searchText = useSelector(selectSearchText);
  const readOnlyPosts = useSelector(selectReadonlyPosts);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearchText(e.target.value));

  const handleClearSearch = () => {
    dispatch(setSearchText(''));
    dispatch(setPosts(readOnlyPosts));
  };

  return (
    <S.SearchContainer>
      <S.InputContainer>
        <S.SearchInput placeholder='Поиск постов' value={searchText} onChange={handleChange} />
        {searchText && (
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
      <SearchOptions />
    </S.SearchContainer>
  );
};

export default PostsSearch;
