import React, {useContext} from 'react';
import {Container, Form} from "react-bootstrap";
import AllCategoryListDropDown from "./AllCategoryListDropDown";
import {BsFillCaretDownFill} from "@react-icons/all-files/bs/BsFillCaretDownFill";
import {ProductAndCategoryContext} from "../../ProductAndCategoryComponent";

function AllCategoryTop(props) {

    return (
        <>
            <Container fluid={true}>
                <Form.Group className="mb-4 dropDown" controlId="formBasicEmail">
                    <Form.Label className="formLable">select a category</Form.Label>
                    {/*all category sub category drop down*/}
                    <AllCategoryListDropDown className=""/>
                    <BsFillCaretDownFill className="DropDownArrow"/>
                </Form.Group>
            </Container>
        </>
    );
}

export default AllCategoryTop;