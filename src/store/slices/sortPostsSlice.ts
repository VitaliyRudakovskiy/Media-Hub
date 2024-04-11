import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SortPostsType } from '../types';

const initialState: SortPostsType = {
  categories: [],
  isWithPictures: false,
  isWithComments: false,
  isLikedByMe: false,
  rating: null,
};

const sortPostsSlice = createSlice({
  name: 'sortPosts',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<string>) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state, action: PayloadAction<string>) => {
      state.categories = state.categories.filter((category) => category !== action.payload);
    },
    setIsWithPictures: (state, action: PayloadAction<boolean>) => {
      state.isWithPictures = action.payload;
    },
    setIsWithComments: (state, action: PayloadAction<boolean>) => {
      state.isWithComments = action.payload;
    },
    setIsLikedByMe: (state, action: PayloadAction<boolean>) => {
      state.isLikedByMe = action.payload;
    },
    setRating: (state, action: PayloadAction<string | null>) => {
      state.rating = action.payload;
    },
  },
});

export const {
  addCategory,
  removeCategory,
  setIsWithPictures,
  setIsWithComments,
  setIsLikedByMe,
  setRating,
} = sortPostsSlice.actions;

export const selectCategories = (state: { sortPosts: SortPostsType }): string[] =>
  state.sortPosts.categories;
export const selectIsWithPictures = (state: { sortPosts: SortPostsType }): boolean =>
  state.sortPosts.isWithPictures;
export const selectIsWithComments = (state: { sortPosts: SortPostsType }): boolean =>
  state.sortPosts.isWithComments;
export const selectIsLikedByMe = (state: { sortPosts: SortPostsType }): boolean =>
  state.sortPosts.isLikedByMe;
export const selectRatingSort = (state: { sortPosts: SortPostsType }): string | null =>
  state.sortPosts.rating;

export default sortPostsSlice.reducer;
