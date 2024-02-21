// src/app/store.ts

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postsReducer from './features/employeeSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
