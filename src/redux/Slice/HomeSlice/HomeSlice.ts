/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HomeState {
	userData: any
}

export const homeSlice = createSlice({
	name: 'user',
	initialState: {
		userData: null
	} as HomeState,
	reducers: {},
});

export const {} = homeSlice.actions;

export default homeSlice.reducer;
