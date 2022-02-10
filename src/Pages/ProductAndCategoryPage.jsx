import React, {useEffect} from 'react';
import TopNav from "../Component/NavBar/TopNav";
import SideBarAndContentWrapper from "../Component/Wrapper/SideBarAndContentWrapper";
import SideBar from "../Component/NavBar/SideBar";
import ContentWrapper from "../Component/Wrapper/ContentWrapper";
import ProductAndCategoryComponent from "../Component/ProductAndCategory/ProductAndCategoryComponent";
import LoginProtectedWrapper from "../Component/Wrapper/LoginProtectedWrapper";
import {useNavigate} from "react-router-dom";
import {shopManagementFeatureCheck} from "../Component/utility/ShopManagementFeatureCheck";

function ProductAndCategoryPage(props) {
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
                        <ProductAndCategoryComponent/>
                    </ContentWrapper>
                </SideBarAndContentWrapper>
            </LoginProtectedWrapper>}
            {superShopFeature == false && <></>}
        </>
    );
}

export default ProductAndCategoryPage;