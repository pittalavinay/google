import { createSlice } from "@reduxjs/toolkit";

const initialState={
    google:[]
}

const Googlereducer= createSlice(
    {
        name:"Googlereducer",
        initialState,
        reducers:{get:(state,action)=>
        {
          state.google.push(action.payload)
        }
    }
            
        }
    
)
export const {get} = Googlereducer.actions;
export default Googlereducer.reducer;