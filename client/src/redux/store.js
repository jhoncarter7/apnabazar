// eslint-disable-next-line no-unused-vars
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from './user/userSlice'

export const store = configureStore({
    reducer: {user: userReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})