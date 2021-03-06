import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuthenticated: false,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		authenticate: (state) => {
			state.isAuthenticated = true;
		},
	},
});

export const { authenticate } = authSlice.actions;

export default authSlice.reducer;
