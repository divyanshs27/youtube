import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const searchSlice = createSlice({
  name: "search",
  initialState: {
  },
  reducers: {
    addToSearchCache: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { addToSearchCache } = searchSlice.actions;
export default searchSlice.reducer;
