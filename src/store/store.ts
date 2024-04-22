import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authSlice from './slices/authSlice';
import postsSlice from './slices/postsSlice';
import searchOptionsSlice from './slices/searchOptionsSlice';
import sortPostsSlice from './slices/sortPostsSlice';
import themeSlice from './slices/themeSlice';
import userSlice from './slices/userSlice';
import usersSlice from './slices/usersSlice';

const persistConfig = {
  key: 'root',
  storage,
  blackList: ['posts', 'searchOptions', 'sortPosts', 'users'],
};

const rootReducer = combineReducers({
  auth: authSlice,
  posts: postsSlice,
  searchOptions: searchOptionsSlice,
  sortPosts: sortPostsSlice,
  theme: themeSlice,
  user: userSlice,
  users: usersSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = typeof store.getState;
export type AppDispatch = typeof store.dispatch;

export default store;
