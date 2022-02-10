import React, {useContext} from 'react';
import {Modal} from "react-bootstrap";
import AddVendorComponent from "./AddVendorComponent";
import {VendorContext} from "../VendorComponent";

function UpdateVendorModal(props) {
    // context Api
    const {updateModalShow, setUpdateModalShow, updateModalData} = useContext(VendorContext)

    // update modal handle cclose
    const updateModalHandleClose = () => {
        setUpdateModalShow(false)
    }
    return (
        <>
            <Modal show={updateModalShow} onHide={updateModalHandleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Vendor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddVendorComponent
                        vendor_name={updateModalData.vendor_name}
                        vendor_address={updateModalData.vendor_address}
                        vendor_phn={updateModalData.vendor_phone}
                        id={updateModalData.id}
                        formType="updateForm"
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}
                    />
                </Modal.Body>
                <Modal.Footer> </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateVendorModal;