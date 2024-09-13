import {createSlice} from "@reduxjs/toolkit";

const AgentSlice = createSlice({
    name: "AgentSlice",
    initialState: {
        loading: false,
        error: null,
        agentID: null,
        agentMicOn: false,
        agentWebcamOn: false,
        agentIsLocal : null,
        agentName: null,
        mode: null,
        agentMeetingId: null,
        croppedImage: null,
        participantId: null,
        token: null,
        agentId: null,
        SIGNCroppedImage : null,
        PANCroppedImage:null
    },
    reducers: {
        setPANCroppedImage: (state, {payload}) => {
            state.PANCroppedImage = payload
        },
        setSIGNCroppedImage: (state, {payload}) => {
            state.SIGNCroppedImage = payload
        },
        setToken: (state, {payload}) => {
            state.token = payload
        },
        setAgentId: (state, {payload}) => {
            state.agentId = payload
        },
        setParticipantId: (state, {payload}) => {
            state.participantId = payload
        },
        setCroppedImage: (state, {payload}) => {
            state.croppedImage = payload
        },
        setMode: (state, {payload}) => {
            state.mode = payload
        },
        setAgentMeetingId: (state, {payload}) => {
            state.agentMeetingId = payload
        },
        setAgentID: (state, {payload}) => {
            state.agentID = payload
        },
        setAgentMicOn: (state, {payload}) => {
            state.agentMicOn = payload
        },
        setAgentWebcamOn: (state, {payload}) => {
            state.agentWebcamOn = payload
        },
        setAgentName: (state, {payload}) => {
            state.agentName = payload
        },
        setAgentIsLocal: (state, {payload}) => {
            state.agentIsLocal = payload
        }
    }
})
export const {setCroppedImage,setSIGNCroppedImage, setPANCroppedImage,setAgentId, setToken,setParticipantId,setAgentIsLocal, setAgentMeetingId, setMode,setAgentName,setAgentID, setAgentWebcamOn, setAgentMicOn} = AgentSlice.actions;
export default AgentSlice.reducer
