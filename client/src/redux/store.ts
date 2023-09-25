import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { jsonplaceholderApi } from '../api/jsonplaceholderApi';
import { loginApi } from '../api/loginApi';
import authSlice from './slices/authSlice';
import masterSlice from './slices/masterSlice';

const rootReducer = combineReducers({
    [jsonplaceholderApi.reducerPath]: jsonplaceholderApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    auth: authSlice,
    master: masterSlice
});

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [jsonplaceholderApi.reducerPath, loginApi.reducerPath]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(jsonplaceholderApi.middleware).concat(loginApi.middleware),
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch