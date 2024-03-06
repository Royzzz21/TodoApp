/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
	userData: any[]
}

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		userData: []
	} as UserState,
	reducers: {
        setUserData(state, action: PayloadAction<any> ) {
            return {...state, userData: state.userData.concat(action.payload) }
        }
    },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
