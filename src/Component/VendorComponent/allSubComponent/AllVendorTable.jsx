import React, {useContext, useState} from 'react';
import {Badge, Container, Tab} from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {NumberSeperator} from "../../utility/NumberSeperator";
import {AiFillEye} from "@react-icons/all-files/ai/AiFillEye";
import {FiEdit} from "@react-icons/all-files/fi/FiEdit";
import {AiTwotoneDelete} from "@react-icons/all-files/ai/AiTwotoneDelete";
import {authCheck} from "../../utility/AuthCheck";
import {VendorContext} from "../VendorComponent";
import ThemeSpinner from "../../Loader/ThemeSpinner";


function AllVendorTable(props) {
    // getting all permission from storage
    const permission = JSON.parse(authCheck().all_permission)

    // context api
    const {
        allVendorsForTable,
        loader,
        setUpdateModalShow,
        setUpdateModalData,
        setModalShow,
        setVendorDetail
    } = useContext(VendorContext)


    // edit onclick
    const editBtnOnClick = (data) => {
        // update modatal data initialization
        setUpdateModalData(data)
        // modal show
        setUpdateModalShow(true)
    }

    // table data initialization
    const products = allVendorsForTable
    const columns = [
        {
            dataField: 'id',
            headerStyle: (colum, colIndex) => {
                return {
                    fontSize: ".9rem",
                    width: '60px',
                    textAlign: 'center',
                    color: "#525252",
                    background: "var(--highlighted-color)"
                };
            },
            style: (colum, colIndex) => {
                return {textAlign: 'center'};
            },
            text: 'SL.',
            formatter: (cell, row, rowIndex) => {

                return rowIndex + 1
            }
        }, {
            dataField: 'vendor_name',
            headerStyle: (colum, colIndex) => {
                return {
                    fontSize: ".9rem",
                    textAlign: 'center',
                    color: "#525252",
                    background: "var(--highlighted-color)"
                };
            },
            style: (colum, colIndex) => {
                return {textAlign: 'left'};
            },
            text: 'Vendor Name'
        }, {
            dataField: 'vendor_phone',
            headerStyle: (colum, colIndex) => {
                return {
                    fontSize: ".9rem",
                    width: '150px',
                    textAlign: 'center',
                    color: "#525252",
                    background: "var(--highlighted-color)"
                };
            },
            style: (colum, colIndex) => {
                return {textAlign: 'center'};
            },
            text: 'Vendor phone'
        }, {
            dataField: 'vendor_address',
            headerStyle: (colum, colIndex) => {
                return {
                    fontSize: ".9rem",
                    textAlign: 'center',
                    color: "#525252",
                    background: "var(--highlighted-color)"
                };
            },
            style: (colum, colIndex) => {
                return {textAlign: 'left'};
            },
            text: 'Vendor address'
        }, {
            dataField: 'total_due_amount',
            headerStyle: (colum, colIndex) => {
                return {
                    fontSize: ".9rem",
                    width: '140px',
                    textAlign: 'center',
                    color: "#525252",
                    background: "var(--highlighted-color)"
                };
            },
            style: (colum, colIndex) => {
                return {textAlign: 'right'};
            },
            text: 'Total due',
            formatter: (cell, row, rowIndex) => {
                return NumberSeperator(cell)
            }
        }, {
            headerStyle: (colum, colIndex) => {
                return {
                    fontSize: ".9rem",
                    width: "90px",
                    textAlign: 'center',
                    color: "#525252",
                    background: "var(--highlighted-color)"
                };
            },
            style: (colum, colIndex) => {
                return {textAlign: 'center'};
            },
            text: 'P_status',
            formatter: (cell, row) => {
                return <>
                    {row.total_due_amount == 0 && <Badge bg="success">Paid</Badge>}
                    {row.total_due_amount > 0 && <Badge bg="danger">due</Badge>}
                </>
            }
        },
        {
            headerStyle: (colum, colIndex) => {
                return {
                    fontSize: ".9rem",
                    textAlign: 'center',
                    color: "#525252",
                    background: "var(--highlighted-color)"
                };
            },
            style: (colum, colIndex) => {
                return {textAlign: 'center'};
            },
            text: 'Actions',
            formatter: (cell, row) => {
                return <>
                    <div>
                        {/*vendor detail*/}
                        {permission.vendor_r == "1" && <AiFillEye onClick={e => {
                            setVendorDetail(row)
                            setModalShow(true)
                        }} className="vendorView"/>}

                        {/*vendor edit*/}
                        {permission.vendor_u == "1" &&
                        <FiEdit onClick={e => editBtnOnClick(row)} className="vendorView"/>}

                        {/*vendor delete*/}
                        {permission.vendor_d == "1" && <AiTwotoneDelete className="vendorTrash"/>}
                    </div>
                </>
            }
        }
    ];
    return (
        <>
            <Container fluid={true}>
                <div className="tableWrapper">
                    <BootstrapTable keyField='id' data={products} pagination={paginationFactory()}
                                    columns={columns}/>
                    {allVendorsForTable.length == 0 && <span className="text-muted text-center">
                        No Data found.....
                    </span>}
                </div>


                {/*loading animation*/}
                {loader == true && <div className="themeSpinner">
                    <ThemeSpinner/>
                </div>}
            </Container>
        </>
    );
}

export default AllVendorTable;