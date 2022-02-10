import React, {useContext} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {NumberSeperator} from "../../utility/NumberSeperator";
import {VendorContext} from "../VendorComponent";

function VendorSummary(props) {
    // context api
    const {
        vendorDetail
    } = useContext(VendorContext)

    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col lg={2} md={3} sm={4} xs={6} className="mb-2 d-flex justify-content-between">
                        <p className="mb-0 formLable vendorDetail"> Vendor name </p>
                        <p className="mb-0 formLable vendorDetailDot"> :</p>
                    </Col>
                    <Col lg={10} md={9} sm={8} xs={6}>
                        <p className="mb-0 formLable vendorDetail">{vendorDetail.vendor_name}</p>
                    </Col>

                    <Col lg={2} md={3} sm={4} xs={6} className="mb-2 d-flex justify-content-between">
                        <p className="mb-0 formLable vendorDetail"> Vendor address </p>
                        <p className="mb-0 formLable vendorDetailDot"> :</p>
                    </Col>
                    <Col lg={10} md={9} sm={8} xs={6}>
                        <p className="mb-0 formLable vendorDetail">{vendorDetail.vendor_address}</p>
                    </Col>

                    <Col lg={2} md={3} sm={4} xs={6} className="d-flex justify-content-between">
                        <p className=" mb-0 formLable vendorDetail"> Vendor phone </p>
                        <p className="mb-0 formLable vendorDetailDot"> :</p>
                    </Col>
                    <Col lg={10} md={9} sm={8} xs={6}>
                        <p className=" mb-0 formLable vendorDetail">{vendorDetail.vendor_phone}</p>
                    </Col>
                </Row>

                <hr/>
                <Row>
                    <Col lg={10} md={9} sm={8} xs={7} className="d-flex mb-3 justify-content-end">
                        <p className="d-inline-block mb-0 formLable vendorDetailDesc">Total purchase amount</p>
                        <p className="d-inline-block mb-0 formLable vendorDetailDesc ms-3">=</p>
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={5} className="text-end">
                        <p className=" mb-0 formLable vendorDetailDesc">{NumberSeperator(vendorDetail.total_purchase_amount)}</p>

                    </Col>
                    <Col lg={10} md={9} sm={8} xs={7} className="d-flex mb-3 justify-content-end">
                        <p className="d-inline-block mb-0 formLable vendorDetailDesc">Total given amount</p>
                        <p className="d-inline-block mb-0 formLable vendorDetailDesc ms-3">=</p>
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={5} className="text-end">
                        <p className=" mb-0 formLable vendorDetailDesc">{NumberSeperator(vendorDetail.total_given_amount)}</p>

                    </Col>
                </Row>

                <Row className="d-flex justify-content-end">
                    <Col lg={6} md={8} sm={10} xs={12} className="">
                        <hr className="mt-0 mb-2"/>
                    </Col>
                </Row>

                <Row>
                    <Col lg={10} md={9} sm={8} xs={7} className="d-flex mb-3 justify-content-end">
                        <p className="d-inline-block mb-0 formLable vendorDetailDesc">Total due amount</p>
                        <p className="d-inline-block mb-0 formLable vendorDetailDesc ms-3">=</p>
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={5} className="text-end">
                        <p className=" mb-0 formLable vendorDetailDesc">
                            {NumberSeperator(parseFloat(vendorDetail.total_purchase_amount) - parseFloat(vendorDetail.total_given_amount))}
                        </p>

                    </Col>
                </Row>


            </Container>
        </>
    );
}

export default VendorSummary;