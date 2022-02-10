import React, {useEffect} from 'react';
import TopNav from "../Component/NavBar/TopNav";
import SideBarAndContentWrapper from "../Component/Wrapper/SideBarAndContentWrapper";
import SideBar from "../Component/NavBar/SideBar";
import ContentWrapper from "../Component/Wrapper/ContentWrapper";
import LoginProtectedWrapper from "../Component/Wrapper/LoginProtectedWrapper";
import VendorComponent from "../Component/VendorComponent/VendorComponent";
import {authCheck} from "../Component/utility/AuthCheck";
import {shopManagementFeatureCheck} from "../Component/utility/ShopManagementFeatureCheck";
import {useNavigate} from "react-router-dom";

function VendorPage(props) {
    // hooks
    const navigate = useNavigate()

    const superShopFeature = shopManagementFeatureCheck()

    useEffect(() => {
        superShopFeature == false && navigate("/dashboard")
    }, [superShopFeature])

    return (
        <>
            {superShopFeature == true && <LoginProtectedWrapper>
                <TopNav/>
                {/*side bar and content wrapper*/}
                <SideBarAndContentWrapper>
                    <SideBar/>
                    {/*only content wreapper*/}
                    <ContentWrapper>
                        <VendorComponent/>
                    </ContentWrapper>
                </SideBarAndContentWrapper>
            </LoginProtectedWrapper>}
            {superShopFeature == false && <></>}
        </>
    );
}

export default VendorPage;