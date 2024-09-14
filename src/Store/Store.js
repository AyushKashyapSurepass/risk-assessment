import { combineSlices } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import DashBoardSlice from "@/Slices/DashBoardSlice.js";


export const rootReducer = combineSlices({
    DashBoardSlice
})

export const store = configureStore({
    reducer: rootReducer,
})