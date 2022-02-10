import React, {useEffect} from 'react';
import {authCheck} from "../utility/AuthCheck";
import {useNavigate} from "react-router-dom";
import {localstorageClear} from "../utility/LocalStorageClear";

function LoginProtectedWrapper(props) {
    // hooks
    const navigate = useNavigate()

    // making a login instance
    const logCheck = authCheck()

    useEffect(() => {
        if (logCheck == false) {
            localstorageClear()
            navigate("/login")
        }
    }, [logCheck])

    if (logCheck !=false){
        return (
            <>
                {props.children}
            </>
        );
    }else {return (<></>);}
}

export default LoginProtectedWrapper;