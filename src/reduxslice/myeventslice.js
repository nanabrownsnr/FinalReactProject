import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
const initialState = {
    myevents:[],
    status:"idle",
    error:''
}

export const fetchMyEvents = createAsyncThunk('fetch/MyEvents',async()=>{
        let response = await fetch('http://localhost:3000/myevents')
    return await response.json()
    
})


export const addMyEvent = createAsyncThunk('add/MyEvents', async(newevent)=>{
   let response =  await fetch(`http://localhost:3000/myevents`,{
        method:'POST',
        body: JSON.stringify(newevent),
        headers:{
            'Content-Type' : 'application/json'
        }
    })
    let data = await response;
    if(!data.ok){
        return Promise.reject('failure')
    }
    return Promise.resolve('success')
})

export const deleteMyEvent = createAsyncThunk('delete/MyEvents', async(eventId)=>{
    let response =  await fetch(`http://localhost:3000/myevents/${eventId}`,{
         method:'DELETE',

     })
    let data = await response;
    if(!data.ok){
        return Promise.reject('failure')
    }
    return Promise.resolve('success')

 })


const myeventslice = createSlice({
    name:"myevents",
    initialState,
    reducers:{
    },
    extraReducers(builder){
        builder.addCase(fetchMyEvents.pending, (state, action)=>{
            state.status='loading'
        })
        builder.addCase(fetchMyEvents.fulfilled, (state, action)=>{
            state.status = 'success';
            state.myevents = state.myevents.concat(action.payload)
        })
        builder.addCase(fetchMyEvents.rejected, (state, action)=>{
            state.status='error'
            console.log("error")
        })

        builder.addCase(deleteMyEvent.pending, (state, action)=>{
            console.log("loading")
            state.status='loading'
        })
        builder.addCase(deleteMyEvent.fulfilled, (state, action)=>{
            state.status = 'success';
            state.myevents = state.myevents.filter(event => event.id !== action.meta.arg);

        })
        builder.addCase(deleteMyEvent.rejected, (state, action)=>{
            state.status='error'

        })

        builder.addCase(addMyEvent.pending, (state, action)=>{

            state.status='loading'
        })
        builder.addCase(addMyEvent.fulfilled, (state, action)=>{
            state.status = 'success';
            state.myevents = state.myevents.concat(action.meta.arg);

        })
        builder.addCase(addMyEvent.rejected, (state, action)=>{
            state.status='error'

        })
    }
})


export default myeventslice.reducer;