import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { TAuth } from '../../types/types';

interface CounterState {
    userName: string,
    auth: TAuth
}

const initialState: CounterState = {
    userName: "",
    auth: "guest"
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserName: (state, action) => {
            state.userName = action.payload
        },
        setAuth: (state, action) => {
            console.log(action.payload);
            state.auth = action.payload
        }
    }
})


export const { setUserName, setAuth } = authSlice.actions

export const selectAuth = (state: RootState) => state.auth.auth

export default authSlice.reducer