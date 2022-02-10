import React from 'react';
import {Modal} from "react-bootstrap";

function CommonModal(props) {
    // receiving paremeter
    const {
        modalShow = true,
        setModalShow,
        modalTitle = "modal title",
        size = false
    } = props

    // modal close handle
    const modalCloseHandle = () => {
        setModalShow(false)
    }

    return (
        <>
            <Modal fullscreen={size} show={modalShow} onHide={modalCloseHandle}>
                <Modal.Header closeButton>
                    <Modal.Title ><span className="text-muted">{modalTitle}</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.children}
                </Modal.Body>
                <Modal.Footer> </Modal.Footer>
            </Modal>

        </>
    );
}

export default CommonModal;