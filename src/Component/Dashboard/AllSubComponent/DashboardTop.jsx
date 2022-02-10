import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {AiFillMoneyCollect} from "@react-icons/all-files/ai/AiFillMoneyCollect";
import {AiOutlineMoneyCollect} from "@react-icons/all-files/ai/AiOutlineMoneyCollect";
import {FaDolly} from "@react-icons/all-files/fa/FaDolly";
import {GiCash} from "@react-icons/all-files/gi/GiCash";
import {GoCreditCard} from "@react-icons/all-files/go/GoCreditCard";
import {GiPayMoney} from "@react-icons/all-files/gi/GiPayMoney";
import takaSign from "../../../assets/images/takasign.png"
import Barcode from "react-barcode";
import ContentWrapper from "../../Wrapper/ContentWrapper";

function DashboardTop(props) {
    return (
        <>
            <div className="text-center dashboardTop">
                <Container fluid={true}>
                    <Row className="mt-5">
                        <Col className="mb-2" lg={3} md={6} sm={6} xs={12}>
                            <div className="summeryCard d-flex align-items-center">
                                <GiPayMoney className="cardIcon"/>
                                <div className="summeryContent d-flex flex-column ms-3">
                                    <span className="card-lable">total expense</span>
                                    <div className="cardDetail d-flex align-items-center ms-3 mt-1">
                                        <img className="takaSign" src={takaSign}/>
                                        <span className="amount">12,50,000</span>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col className="mb-2" lg={3} md={6} sm={6} xs={12}>
                            <div className="summeryCard d-flex align-items-center">
                                <GiCash className="cardIcon"/>
                                <div className="summeryContent d-flex flex-column ms-3">
                                    <span className="card-lable">total sales</span>
                                    <div className="cardDetail d-flex align-items-center ms-3 mt-1">
                                        <img className="takaSign" src={takaSign}/>
                                        <span className="amount">12,50,000</span>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col className="mb-2" lg={3} md={6} sm={6} xs={12}>
                            <div className="summeryCard d-flex align-items-center">
                                <GoCreditCard className="cardIcon"/>
                                <div className="summeryContent d-flex flex-column ms-3">
                                    <span className="card-lable">purchase due</span>
                                    <div className="cardDetail d-flex align-items-center ms-3 mt-1">
                                        <img className="takaSign" src={takaSign}/>
                                        <span className="amount">12,50,000</span>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col className="mb-2" lg={3} md={6} sm={6} xs={12}>
                            <div className="summeryCard d-flex align-items-center">
                                <FaDolly className="cardIcon"/>
                                <div className="summeryContent d-flex flex-column ms-3">
                                    <span className="card-lable">invoice due</span>
                                    <div className="cardDetail d-flex align-items-center ms-3 mt-1">
                                        <img className="takaSign" src={takaSign}/>
                                        <span className="amount">12,50,000</span>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    );
}

export default DashboardTop;