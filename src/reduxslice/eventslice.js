import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
const initialState = {
    events:[],
    status:"idle",
    error:''
}

export const fetchEvents = createAsyncThunk('fetch/Events',async()=>{
        let response = await fetch('http://localhost:3000/events')
    return await response.json()
    
})


const eventslice = createSlice({
    name:"events",
    initialState, 
    reducers:{
    },
    extraReducers(builder){
        builder.addCase(fetchEvents.pending, (state, action)=>{
            console.log("loading")
            state.status='loading'
        })
        builder.addCase(fetchEvents.fulfilled, (state, action)=>{
            state.status = 'success';
            console.log("success")
            state.events = state.events.concat(action.payload)
        })
        builder.addCase(fetchEvents.rejected, (state, action)=>{
            state.status='error'
            console.log("error")
        })
    }
})


export default eventslice.reducer;