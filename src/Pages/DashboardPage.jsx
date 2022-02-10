import React from 'react';
import TopNav from "../Component/NavBar/TopNav";
import SideBarAndContentWrapper from "../Component/Wrapper/SideBarAndContentWrapper";
import SideBar from "../Component/NavBar/SideBar";
import ContentWrapper from "../Component/Wrapper/ContentWrapper";
import DashboardComponent from "../Component/Dashboard/DashboardComponent";
import LoginProtectedWrapper from "../Component/Wrapper/LoginProtectedWrapper";


function DashboardPage(props) {
    return (
        <>
            <LoginProtectedWrapper>
                <TopNav/>
                {/*side bar and content wrapper*/}
                <SideBarAndContentWrapper>
                    <SideBar/>
                    {/*only content wreapper*/}
                    <ContentWrapper>
                        <DashboardComponent/>
                    </ContentWrapper>
                </SideBarAndContentWrapper>
                
            </LoginProtectedWrapper>
        </>
    );
}

export default DashboardPage;