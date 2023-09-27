import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { TAuth, TUser } from '../../interfaces/interfaces';

interface AuthState {
    user: TUser,
    role: TAuth,
}

const initialState: AuthState = {
    user: {
        email: "",
        id: "",
        isActivated: false
    },
    role: "guest",
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<TUser>) => {
            state.user = action.payload
        },
        setAuth: (state, action: PayloadAction<TAuth>) => {
            state.role = action.payload
        },
    }
})


export const { setUser, setAuth } = authSlice.actions

export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer