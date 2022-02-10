import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {authCheck} from "../utility/AuthCheck";
import {localstorageClear} from "../utility/LocalStorageClear";

function LogoutProtectedWrapper(props) {
    // hooks
    const navigate = useNavigate()

    // making a login instance
    const logCheck = authCheck()


    useEffect(() => {
        if (logCheck != false) {
            navigate("/")
        }
    }, [logCheck])


    if (logCheck == false) {
        return (
            <>
                {props.children}
            </>
        );
    } else {
        return (<></>);
    }
}

export default LogoutProtectedWrapper;