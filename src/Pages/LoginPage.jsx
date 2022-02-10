import React from 'react';
import LoginComponent from "../Component/LoginComponent/LoginComponent";
import LogoutProtectedWrapper from "../Component/Wrapper/logoutProtectedWrapper";

function LoginPage(props) {
    return (
        <>
            <LogoutProtectedWrapper>
                <LoginComponent/>
            </LogoutProtectedWrapper>
        </>
    );
}

export default LoginPage;