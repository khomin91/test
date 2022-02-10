import React, {createContext, useEffect, useState} from 'react';
import LoginForm from "./allSubComponent/LoginForm";
import "./Css/loginCss.css"
import {useNavigate} from "react-router-dom";

// making context api
export const LoginComponentContext = createContext()

function LoginComponent(props) {
    // hooks
    const navigate = useNavigate()

    // state
    const [logStatus, setLogStatus] = useState(false)
    const [logFailedAlert, setLogFailedAlert] = useState(false)


    useEffect(() => {
        logStatus == true && navigate("/dashboard")
        setLogFailedAlert(false)
    }, [logStatus])

    return (
        <>
            <LoginComponentContext.Provider value={{
                logStatus: logStatus,
                setLogStatus: setLogStatus,
                logFailedAlert: logFailedAlert,
                setLogFailedAlert: setLogFailedAlert
            }}>
                <div className="loginContainer">
                    <LoginForm/>
                </div>
            </LoginComponentContext.Provider>
        </>
    );
}

export default LoginComponent;