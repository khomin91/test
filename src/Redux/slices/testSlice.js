import {createSlice} from "@reduxjs/toolkit";

export const testSlice = createSlice({
    name: "test",
    initialState: {
        data: "test"
    },
    reducers: {
        testReducer: (state, action) => {
            state.data = action.payload
        }
    }
})