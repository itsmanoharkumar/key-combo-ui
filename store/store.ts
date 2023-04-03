import { authSlice } from '@/store/authSlice';
import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import counterReducer, { counterSlice } from './counterSlice';

const makeStore = () => configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [counterSlice.name]: counterSlice.reducer
  },
  devTools: true
})

export const wrapper = createWrapper(makeStore);

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
