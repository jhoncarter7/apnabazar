
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from './user/userSlice'

export const store = configureStore({
    reducer: userReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})