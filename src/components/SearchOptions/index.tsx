'use client';

import { useEffect } from 'react';

import searchCheckboxes from '@/constants/searchCheckboxes';
import { defineInitialSearchOptions } from '@/helpers/defineInitialSearchOptions';
import { useAppDispatch } from '@/store/hooks';
import { setStartOptions } from '@/store/slices/searchOptionsSlice';

import SearchCheckbox from './SearchCheckbox';
import { CheckboxesContainer } from './styled';

const SearchOptions = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setStartOptions(defineInitialSearchOptions()));
  }, [dispatch]);

  return (
    <CheckboxesContainer>
      {searchCheckboxes.map(({ id, name }) => (
        <SearchCheckbox key={id} id={id} name={name} />
      ))}
    </CheckboxesContainer>
  );
};

export default SearchOptions;
