import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { TAuth } from '../../types/types';
import { TUser } from '../../interfaces/interfaces';

interface CounterState {
    user: TUser,
    auth: TAuth,
    accessToken: string,
}

const initialState: CounterState = {
    user: {
        email: "",
        id: "",
        isActivated: false
    },
    auth: "guest",
    accessToken: ""
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setAuth: (state, action) => {
            state.auth = action.payload
        },
        setAccessToken: (state, action) => {
            state.auth = action.payload
        }
    }
})


export const { setUser, setAuth } = authSlice.actions

export const selectAuth = (state: RootState) => state.auth.auth

export default authSlice.reducer