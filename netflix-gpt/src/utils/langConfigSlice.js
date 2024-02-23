import { createSlice } from "@reduxjs/toolkit";

const langConfigSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});
export const { changeLanguage } = langConfigSlice.actions;
export default langConfigSlice.reducer;
