import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom"
import DashboardPage from "../Pages/DashboardPage";
import ProductAndCategoryPage from "../Pages/ProductAndCategoryPage";
import LoginPage from "../Pages/LoginPage";
import VendorPage from "../Pages/VendorPage";


function AppRoute(props) {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard"/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/dashboard" element={<DashboardPage/>}/>
                <Route path="/products" element={<ProductAndCategoryPage/>}/>
                <Route path="/vendors" element={<VendorPage/>}/>
            </Routes>
        </>
    );
}

export default AppRoute;