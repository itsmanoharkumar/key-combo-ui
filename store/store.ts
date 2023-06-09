import { appSlice } from "@/store/appSlice";
import { authSlice } from "@/store/authSlice";
import { productSlice } from "@/store/productSlice";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { counterSlice } from "./counterSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [appSlice.name]: appSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [counterSlice.name]: counterSlice.reducer,
      [productSlice.name]: productSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
