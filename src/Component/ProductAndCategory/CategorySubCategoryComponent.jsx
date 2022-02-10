import React, {useContext} from 'react';
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import {authCheck} from "../utility/AuthCheck";
import AllCategoryListDropDown from "./AllSubComponent/CategorySubComponents/AllCategoryListDropDown";
import AddCategory from "./AllSubComponent/CategorySubComponents/AddCategory";
import AddSubCategory from "./AllSubComponent/CategorySubComponents/AddSubCategory";
import AllCategoryTop from "./AllSubComponent/CategorySubComponents/AllCategoryTop";
import SingleCategoryTable from "./AllSubComponent/CategorySubComponents/SingleCategoryTable";
import AllSubCategoryTable from "./AllSubComponent/CategorySubComponents/AllSubCategoryTable";
import {ProductAndCategoryContext} from "./ProductAndCategoryComponent";

function CategorySubCategoryComponent(props) {
    // get permission
    const permission = JSON.parse(authCheck().all_permission)


    return (
        <>
            <Tabs defaultActiveKey="allCategory" id="uncontrolled-tab-example" className="mt-2 ms-2 mb-3">
                {/*all category and sub category*/}
                {permission.product_r == "1" && <Tab eventKey="allCategory" title="all category">
                    <AllCategoryTop/>
                    <SingleCategoryTable/>
                    <hr/>
                    <AllSubCategoryTable/>
                </Tab>}

                {/*add category and sub category*/}
                {permission.product_c == "1" && <Tab eventKey="add" title="add">
                    <Container fluid={true}>
                        <Row>
                            {/*add category*/}
                           <Col lg={6} md={6} sm={12} xs={12} className="catAndSubCatComp">
                                <AddCategory/>
                                <div className="d-none d-md-block catAndSubCatBorder"></div>
                           </Col>

                            {/*add sub category*/}
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <AddSubCategory/>
                            </Col>
                        </Row>
                    </Container>
                </Tab>}
            </Tabs>
        </>
    );
}

export default CategorySubCategoryComponent;