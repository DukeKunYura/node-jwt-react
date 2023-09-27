import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TPageLink } from '../../interfaces/interfaces';

const initialState = {
    search: "",
    activeLink: "Home",
    isActivePersonAdder: false,
    isActiveCarAdder: false,
    isActiveCarRegistration: false
};

export const masterSlice = createSlice({
    name: 'master',
    initialState,
    reducers: {

        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setActiveLink: (state, action: PayloadAction<TPageLink>) => {
            state.activeLink = action.payload
        },
    }
})


export const {
    setSearch,
    setActiveLink, } = masterSlice.actions

export default masterSlice.reducer