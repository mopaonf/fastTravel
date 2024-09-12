

import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
	name: "ThemeSlice",
	initialState: "light",
	reducers: {
		setTheme: (state, action) => {
			state = action.payload;
			return state;
		},
	},
});

export const { setTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;