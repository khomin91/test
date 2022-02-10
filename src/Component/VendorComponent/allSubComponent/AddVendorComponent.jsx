import React, {useContext, useRef, useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {numberRegex} from "../../utility/Regex";
import {VendorContext} from "../VendorComponent";
import {useDispatch} from "react-redux";
import {addVendorAction, updateVendorAction} from "../../../Redux/actions/VendorAction";


function AddVendorComponent(props) {
    // props parameter
    const {
        lg = 6,
        md = 6,
        sm = 10,
        xs = 12,
        vendor_name = "",
        vendor_address = "",
        vendor_phn = "",
        formType = "addForm",
        id = ""
    } = props

    // hooks
    const dispatch = useDispatch()

    // btn ref
    const addVendorFormRef = useRef()
    const addVendorBtnRef = useRef()
    const updateVendorBtnRef = useRef()

    // context api
    const {
        setToastShow,
        setToastType,
        setToastMessage,
        setLogStatus,
        setUpdateModalShow
    } = useContext(VendorContext)

    // hook form property
    const {register, handleSubmit, reset, formState: {errors}} = useForm();


    // add and update Form submit
    const onSubmit = data => {
        // add form submit
        if (formType == "addForm") {
            const payload = {
                data: data,
                addVendorFormRef: addVendorFormRef,
                addVendorBtnRef: addVendorBtnRef,
                reset: reset,
                setToastType: setToastType,
                setToastShow: setToastShow,
                setToastMessage: setToastMessage,
                setLogStatus: setLogStatus
            }

            dispatch(addVendorAction(payload))
        } // add form submit end


        // update form
        else if (formType == "updateForm") {
            const payload = {
                data: {...data, id: id},
                updateVendorFormRef: addVendorFormRef,
                updateVendorBtnRef: updateVendorBtnRef,
                reset: reset,
                setUpdateModalShow: setUpdateModalShow,
                setToastType: setToastType,
                setToastShow: setToastShow,
                setToastMessage: setToastMessage,
                setLogStatus: setLogStatus
            }

            dispatch(updateVendorAction(payload))
        }
    }


    return (
        <>
            <Container fluid={true}>
                <Form ref={addVendorFormRef} onSubmit={handleSubmit(onSubmit)} className="ms-0 ms-md-2 mt-0 mt-md-2">
                    <Row className="mb-3  d-flex flex-column">
                        {/*vandor name*/}
                        <Col lg={lg} md={md} sm={sm} xs={xs} className="mb-3">
                            <Form.Group controlId="formGridEmail">
                                <Form.Label className="formLable">Vendor Name*</Form.Label>
                                <Form.Control
                                    defaultValue={vendor_name}
                                    className="inputField"
                                    type="text"
                                    placeholder="Enter vendor name"
                                    {...register("vendorName", {
                                        required: true
                                    })}
                                />

                                {/*validation message*/}
                                {errors.vendorName && <span className="text-danger">
                                    {errors.vendorName.type == "required" && "this field is required"}
                                </span>}
                            </Form.Group>
                        </Col>

                        {/*vendor address*/}
                        <Col lg={lg} md={md} sm={sm} xs={xs} className="mb-3">
                            <Form.Group controlId="formGridEmail">
                                <Form.Label className="formLable">Vendor Address</Form.Label>
                                <Form.Control
                                    defaultValue={vendor_address}
                                    className="inputField"
                                    type="text"
                                    placeholder="Enter vendor address"
                                    {...register("vendorAddress")}
                                />
                            </Form.Group>
                        </Col>

                        {/*vendor mobile*/}
                        <Col lg={lg} md={md} sm={sm} xs={xs} className="mb-3">
                            <Form.Group controlId="formGridEmail">
                                <Form.Label className="formLable">Vendor mobile*</Form.Label>
                                <Form.Control
                                    defaultValue={vendor_phn}
                                    className="inputField"
                                    type="text"
                                    placeholder="Enter vendor phone number"
                                    {...register("vendorPhn", {
                                        required: true,
                                        pattern: numberRegex
                                    })}
                                />


                                {/*validation message*/}
                                {errors.vendorPhn && <span className="text-danger">
                                    {errors.vendorPhn.type == "required" && "this field is required"}
                                    {errors.vendorPhn.type == "pattern" && "please insert a valid number"}
                                </span>}
                            </Form.Group>
                        </Col>
                    </Row>


                    {/*submit button*/}
                    {formType == "addForm" &&
                    <Button ref={addVendorBtnRef} className="themeBtn" variant="primary" type="submit">
                        Save
                    </Button>}
                    {formType == "updateForm" &&
                    <Button ref={updateVendorBtnRef} className="themeBtn" variant="primary" type="submit">
                        Update
                    </Button>}
                </Form>
            </Container>
        </>
    );
}

export default AddVendorComponent;