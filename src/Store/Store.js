import { combineSlices } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import ParticipantSlice from "@/Slices/participantSlice.js";
import AgentSlice from "@/Slices/AgentSlice.js";


export const rootReducer = combineSlices({
    ParticipantSlice,
    AgentSlice
})




export const store = configureStore({
    reducer: rootReducer,
})