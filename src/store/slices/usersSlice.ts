import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserWithId } from '@/types/user';

import { UsersType } from '../types';

const initialState: UsersType = {
  users: [],
  readonlyUsers: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<UserWithId[]>) => {
      state.users = action.payload;
    },
    setReadonlyUsers: (state, action: PayloadAction<UserWithId[]>) => {
      state.readonlyUsers = action.payload;
    },
  },
});

export const { setUsers, setReadonlyUsers } = usersSlice.actions;

export const selectUsers = (state: { users: UsersType }): UserWithId[] => state.users.users;
export const selectReadonlyUsers = (state: { users: UsersType }): UserWithId[] =>
  state.users.readonlyUsers;

export default usersSlice.reducer;
