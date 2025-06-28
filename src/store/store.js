import { configureStore } from "@reduxjs/toolkit";
import dataSlice from './dataslice'

const store = configureStore({
    reducer:{
        dataSlice
    }
})

export default store