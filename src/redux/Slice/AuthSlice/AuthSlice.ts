/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
	authDetails: any
}

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
	     authDetails: null 
	} as AuthState,
	reducers: {
        setAuthDetails(state, action: PayloadAction<any> ) {
            return {...state, authDetails: action.payload }
        }
    },
});

export const { setAuthDetails } = authSlice.actions;

export default authSlice.reducer;
