import React, {useContext} from 'react';
import CommonModal from "../CommonModal/CommonModal";
import {VendorContext} from "./VendorComponent";
import {Tab, Tabs} from "react-bootstrap";
import VendorSummary from "./allSubComponent/VendorSummary";

function VendorDetailComponent(props) {
    // context api
    const {
        modalShow,
        setModalShow
    } = useContext(VendorContext)
    return (
        <>
            <CommonModal
                size={true}
                modalShow={modalShow}
                setModalShow={setModalShow}
                modalTitle="Vendor detail"
            >
                {/*vendor summary and detail tab pans*/}
                <Tabs defaultActiveKey="detail" id="uncontrolled-tab-example" className="mt-2 ms-2 mb-3">
                    {/*detail*/}
                    <Tab eventKey="detail" title="detail">
                        <Tabs defaultActiveKey="allChallan" id="uncontrolled-tab-example" className="mt-2 ms-2 mb-3">
                            <Tab eventKey="allChallan" title="all challan">
                                <h5>all challan is developint</h5>
                            </Tab>
                            <Tab eventKey="allDue" title="all due">
                                <h5>all Due is developint</h5>
                            </Tab>
                        </Tabs>
                    </Tab>

                    {/*vendor summary*/}
                    <Tab eventKey="summary" title="summary">
                        <VendorSummary/>
                    </Tab>
                </Tabs>
            </CommonModal>
        </>
    );
}

export default VendorDetailComponent;