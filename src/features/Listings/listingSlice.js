import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listings: [],
};

export const listingSlice = createSlice({
  name: "listings",
  initialState,
  reducers: {
    POPULATE_LISTINGS: (state, action) => {
      state.listings.push(...action.payload, ...state.listings);
    },
  },
});

export const { POPULATE_LISTINGS } = listingSlice.actions;

export default listingSlice.reducer;
