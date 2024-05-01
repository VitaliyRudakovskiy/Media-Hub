import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AuthType } from '../types'

const initialState: AuthType = {
  isAuth: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
  },
})

export const { setIsAuth } = authSlice.actions

export const selectIsAuth = (state: { auth: AuthType }): boolean => state.auth.isAuth

export default authSlice.reducer
