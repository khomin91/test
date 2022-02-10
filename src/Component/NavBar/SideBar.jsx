import React from 'react';
import SideBarAndContentWrapper from "../Wrapper/SideBarAndContentWrapper";
import {FaBars} from "@react-icons/all-files/fa/FaBars";
import {Link} from "react-router-dom";
import {authCheck} from "../utility/AuthCheck";
import {shopManagementFeatureCheck} from "../utility/ShopManagementFeatureCheck";

function SideBar(props) {
    const permission = JSON.parse(authCheck().all_permission)
    const superShopFeature = shopManagementFeatureCheck()


    // side bar toggle
    const sideBarToggleOnClick = (event) => {
        event.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    }

    return (
        <>
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sideBarTop sb-sidenav-dark" id="sidenavAccordion">

                    {/*app name*/}
                    <h5 className="appName">my shop</h5>
                    {/**********/}

                    <div className="sidebarThinBackground"></div>

                    <div className="sb-sidenav-menu">
                        {/*all sidebar menu*/}
                        <div className="nav">

                            {/*sidebar toggle button*/}
                            <button className="toggleBtn btn btn-link btn-sm me-4 me-lg-0"
                                    onClick={event => sideBarToggleOnClick(event)}>
                                <i className="text-white fas fa-bars"/></button>
                            {/*********************/}

                            {/*dashboard menu*/}
                            <a className="nav-link dashboard" href="#">
                                <div className="sb-nav-link-icon menuLinkIcon"><i className="fas fa-tachometer-alt"/>
                                </div>
                                <span className="menuLink">Dashboard</span>
                            </a>

                            {/*shop management feature start*/}
                            {superShopFeature == true && <>

                                {/*stock menu start*/}
                                {permission.store_link == "1" && <>
                                    {/*stock menu lable*/}
                                    <div className="sb-sidenav-menu-heading menuLable">Stock</div>

                                    {/*stock menu name and drop down initialize*/}
                                    <a className="nav-link collapsed menu" href="#" data-bs-toggle="collapse"
                                       data-bs-target="#collapseLayouts" aria-expanded="false"
                                       aria-controls="collapseLayouts">
                                        <div className="sb-nav-link-icon menuLinkIcon"><i
                                            className="fas fa-columns"/></div>
                                        <span className="menuLink">Store</span>
                                        <div className="sb-sidenav-collapse-arrow menuLinkIcon"><i
                                            className="fas fa-angle-down"/></div>
                                    </a>

                                    {/*stock sub-menu*/}
                                    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne"
                                         data-bs-parent="#sidenavAccordion">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            {/*permission checking*/}
                                            {permission.vendor_r == "1" &&
                                            <Link className="nav-link menuLink pt-2 pb-2"
                                                  to="/vendors">Vendors</Link>}
                                                  
                                            {permission.product_r == "1" &&
                                            <Link className="nav-link menuLink pt-2 pb-2" to="/products">Product</Link>}

                                            <a className="nav-link menuLink pt-0 pb-2"
                                               href="layout-static.html">Purchase</a>
                                            <a className="nav-link menuLink pb-2 pt-0" href="layout-static.html">Purchase
                                                return</a>
                                            <a className="nav-link menuLink pt-0 pb-2" href="layout-static.html">Stock
                                                transfer</a>
                                        </nav>
                                    </div>
                                    {/*stock sub-menu end*/}
                                </>}
                                {/*stock menu end*/}

                            </>}
                            {/*super shop end*/}


                            <a className="menu nav-link collapsed" href="#" data-bs-toggle="collapse"
                               data-bs-target="#anotherLink" aria-expanded="false"
                               aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon menuLinkIcon"><i className="fas fa-columns"/></div>
                                <span className="menuLink">another</span>
                                <div className="sb-sidenav-collapse-arrow menuLinkIcon"><i
                                    className="fas fa-angle-down"/></div>
                            </a>
                            <div className="collapse" id="anotherLink" aria-labelledby="headingOne"
                                 data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link menuLink" href="layout-static.html">Static Navigation</a>
                                    <a className="nav-link menuLink" href="layout-sidenav-light.html">Light Sidenav</a>
                                </nav>
                            </div>

                        </div>
                    </div>
                    {/*<div className="sb-sidenav-footer">*/}
                    {/*    <div className="small">All right reserved:</div>*/}
                    {/*    https://www.sabbirinfo.com*/}
                    {/*</div>*/}
                </nav>
            </div>
        </>
    );
}

export default SideBar;