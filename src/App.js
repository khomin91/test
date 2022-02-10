import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import "./assets/css/custom.css"
import {HashRouter} from "react-router-dom";
import AppRoute from "./AllRoute/AppRoute";



function App(props) {

    return (
        <>
            <HashRouter>
                <AppRoute/>
            </HashRouter>
        </>
    );
}

export default App;