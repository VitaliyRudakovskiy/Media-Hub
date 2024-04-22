'use client';

import { useEffect } from 'react';
import { onSnapshot } from 'firebase/firestore';

import { usersQueryOrderedByEmail } from '@/firebase/queries';
import { useAppDispatch } from '@/store/hooks';
import { setReadonlyUsers, setUsers } from '@/store/slices/usersSlice';
import { UserWithId } from '@/types/user';

const UsersFeedProvider = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onSnapshot(usersQueryOrderedByEmail, (snapshot) => {
      const userData = snapshot.docs.map((doc) => ({
        id: doc.id,
        userData: doc.data(),
      })) as UserWithId[];

      dispatch(setUsers(userData));
      dispatch(setReadonlyUsers(userData));
    });

    return () => unsubscribe();
  }, [dispatch]);

  return null;
};

export default UsersFeedProvider;
