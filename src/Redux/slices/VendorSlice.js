import {createSlice} from "@reduxjs/toolkit";
import {act} from "@testing-library/react";

export const vendorSlice = createSlice({
    name: "vendors",
    initialState: {
        allVendors: []
    },
    reducers: {
        getAllVendorsReducer: (state, action) => {
            state.allVendors = action.payload
        }
    }
})