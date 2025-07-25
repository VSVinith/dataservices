import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[]
}

const dataSlice = createSlice({
    name: "loyaltyData",
    initialState,
    reducers:{
        getData(state, action){
            state.data = action.payload
        }
    }
})


export const {getData} = dataSlice.actions

export default dataSlice.reducer