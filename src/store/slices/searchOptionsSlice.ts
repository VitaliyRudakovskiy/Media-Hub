import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { SearchOptionsType } from '../types'

const initialState: SearchOptionsType = {
  searchText: '',
  selectedOptions: [],
}

const searchOptionsSlice = createSlice({
  name: 'searchOptions',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload
    },
    setStartOptions: (state, action: PayloadAction<string[]>) => {
      state.selectedOptions = action.payload
    },
    addOption: (state, action: PayloadAction<string>) => {
      state.selectedOptions.push(action.payload)
    },
    removeOption: (state, action: PayloadAction<string>) => {
      state.selectedOptions = state.selectedOptions.filter((option) => option !== action.payload)
    },
  },
})

export const { setSearchText, addOption, removeOption, setStartOptions } =
  searchOptionsSlice.actions

export const selectSearchText = (state: { searchOptions: SearchOptionsType }): string =>
  state.searchOptions.searchText
export const selectOptions = (state: { searchOptions: SearchOptionsType }): string[] =>
  state.searchOptions.selectedOptions

export default searchOptionsSlice.reducer
