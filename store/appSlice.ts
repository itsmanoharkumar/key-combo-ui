import { OPERATING_SYSTEM, THEME_MODE } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  operatingSystem: OPERATING_SYSTEM.WINDOWS,
  themeMode: null as THEME_MODE | null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setOperatingSystem(state, action) {
      state.operatingSystem = action.payload;
    },
    setThemeMode(state, action) {
      state.themeMode = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setOperatingSystem, setThemeMode } = appSlice.actions;
export const selectOperatingSystem = (state: any) => state.app.operatingSystem;
export const selectThemeMode = (state: any) => state.app.themeMode;
export default appSlice.reducer;
