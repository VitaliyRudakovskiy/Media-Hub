'use client';

import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DocumentData } from 'firebase/firestore';

import getUserByEmail from '@/firebase/api/getUserByEmail';
import fetchUsersBySearch from '@/helpers/fetchUsersBySearch';
import filterUsersArray from '@/helpers/filterUsersArray';
import { useAppDispatch } from '@/store/hooks';
import { selectActiveTile, selectUsersSearchText } from '@/store/slices/searchUsersSlice';
import { selectUser } from '@/store/slices/userSlice';
import { selectReadonlyUsers, setUsers } from '@/store/slices/usersSlice';
import { UserWithId } from '@/types/user';

import UsersSearch from '../UsersSearch';
import UsersSort from '../UsersSort';

import { SortSearchContainer } from './styled';

const UsersSearchSortLogic = () => {
  const [currentUser, setCurrentUser] = useState<null | DocumentData>(null);
  const readonlyUsers = useSelector(selectReadonlyUsers);
  const usersSearchText = useSelector(selectUsersSearchText);
  const activeTile = useSelector(selectActiveTile);
  const { email } = useSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (email) {
      const fetchUser = async () => {
        const userData = await getUserByEmail(email);
        setCurrentUser(userData);
      };
      fetchUser();
    }
  }, [email]);

  const handleSearch = useCallback(
    (users: UserWithId[]) => {
      const searchedUsers = fetchUsersBySearch(users, usersSearchText);
      return searchedUsers;
    },
    [usersSearchText]
  );

  const handleSort = useCallback(
    (users: UserWithId[]) => {
      const sortedUsers = filterUsersArray(users, activeTile, currentUser);
      return sortedUsers;
    },
    [activeTile, currentUser]
  );

  useEffect(() => {
    const searchedUsers = handleSearch(readonlyUsers);
    const sortedUsers = handleSort(searchedUsers);

    dispatch(setUsers(sortedUsers));
  }, [handleSearch, handleSort, readonlyUsers, dispatch]);

  return (
    <SortSearchContainer>
      <UsersSearch />
      <UsersSort />
    </SortSearchContainer>
  );
};

export default UsersSearchSortLogic;
