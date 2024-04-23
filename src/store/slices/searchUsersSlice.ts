import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UsersVariants } from '@/constants/usersSortTiles';

import { SearchUsersType } from '../types';

const initialState: SearchUsersType = {
  searchUsersText: '',
  activeTile: UsersVariants.FRIENDS,
};

const searchUsersSlice = createSlice({
  name: 'searchUsers',
  initialState,
  reducers: {
    setUsersSearchText: (state, action: PayloadAction<string>) => {
      state.searchUsersText = action.payload;
    },
    removeUsersSearchText: (state) => {
      state.searchUsersText = '';
    },
    setActiveTile: (state, action: PayloadAction<string>) => {
      state.activeTile = action.payload;
    },
  },
});

export const { setUsersSearchText, removeUsersSearchText, setActiveTile } =
  searchUsersSlice.actions;

export const selectUsersSearchText = (state: { searchUsers: SearchUsersType }): string =>
  state.searchUsers.searchUsersText;
export const selectActiveTile = (state: { searchUsers: SearchUsersType }): string =>
  state.searchUsers.activeTile;

export default searchUsersSlice.reducer;
