import {createSlice} from "@reduxjs/toolkit";

export const catSubCatSlice = createSlice({
    name: "catSubCat",
    initialState: {
        allCatSUbCat: []
    },
    reducers: {
        getAllCatSubCatReducer: (state, aciton) => {
            state.allCatSUbCat = aciton.payload
        }
    }
})