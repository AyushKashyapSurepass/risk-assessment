import {createSlice} from "@reduxjs/toolkit";

const ParticipantSlice = createSlice({
    name: "participantSlice",
    initialState: {
        loading: false,
        error: null,
        participantID: null,
        micOn: false,
        webcamOn: false,
        name : null,
        isLocal : null
    },
    reducers: {
        setParticipantID: (state, {payload}) => {
            state.participantID = payload
        },
        setMicOn: (state, {payload}) => {
            state.micOn = payload
        },
        setWebcamOn: (state, {payload}) => {
            state.webcamOn = payload
        },
        setName: (state, {payload}) => {
            state.name = payload
        },
        setIsLocal: (state, {payload}) => {
            state.isLocal = payload
        },
    }
})
export const {setIsLocal,setParticipantID,setName, setWebcamOn, setMicOn} = ParticipantSlice.actions;
export default ParticipantSlice.reducer
