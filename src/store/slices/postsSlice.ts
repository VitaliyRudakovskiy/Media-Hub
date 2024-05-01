import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { PostWithId } from '@/types/postType'

import { PostsType } from '../types'

const initialState: PostsType = {
  posts: [],
  readonlyPosts: [],
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostWithId[]>) => {
      state.posts = action.payload
    },
    setReadonlyPosts: (state, action: PayloadAction<PostWithId[]>) => {
      state.readonlyPosts = action.payload
    },
  },
})

export const { setPosts, setReadonlyPosts } = postsSlice.actions

export const selectPosts = (state: { posts: PostsType }): PostWithId[] => state.posts.posts
export const selectReadonlyPosts = (state: { posts: PostsType }): PostWithId[] =>
  state.posts.readonlyPosts

export default postsSlice.reducer
