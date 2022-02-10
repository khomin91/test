import {configureStore} from "@reduxjs/toolkit";
import {testSlice} from "./slices/testSlice";
import {vendorSlice} from "./slices/VendorSlice";
import {catSubCatSlice} from "./slices/CatSubCatSlice";

export const store = configureStore({
    devTools: true,
    reducer: {
        vendors: vendorSlice.reducer,
        catSubCat: catSubCatSlice.reducer
    }
})