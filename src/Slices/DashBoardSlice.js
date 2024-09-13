import {createSlice} from "@reduxjs/toolkit";

const DashBoardSlice = createSlice({
    name: "DashBoardSlice",
    initialState: {
        loading: false,
        error: null,
        isMinimized: false
    },
    reducers: {
        setIsMinimized : (state, {payload}) => {
            state.isMinimized = payload
        }
    }
})
export const {setIsMinimized} = DashBoardSlice.actions;
export default DashBoardSlice.reducer
