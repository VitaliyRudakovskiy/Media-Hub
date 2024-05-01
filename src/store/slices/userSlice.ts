import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UserType } from '@/types/user'

const initialState: UserType = {
  id: '',
  name: '',
  secondName: '',
  email: '',
  avatarName: null,
  description: '',
  favourites: '',
  role: 'user',
  requests: [],
  sentRequests: [],
  friends: [],
  token: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (_, action: PayloadAction<UserType>) => ({
      ...action.payload,
    }),
    removeCurrentUser: () => ({
      ...initialState,
    }),
    updateCurrentUser: (state, action: PayloadAction<Partial<UserType>>) => ({
      ...state,
      ...action.payload,
    }),
  },
})

export const { setCurrentUser, removeCurrentUser, updateCurrentUser } = userSlice.actions

export const selectUser = (state: { user: UserType }) => state.user

export default userSlice.reducer
