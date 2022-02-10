import React, {useContext, useEffect, useState} from 'react';
import {Form} from "react-bootstrap";
import {FaGreaterThan} from "@react-icons/all-files/fa/FaGreaterThan";
import {VendorContext} from "../VendorComponent";
import data from "bootstrap/js/src/dom/data";
import {useSelector} from "react-redux";
import {BsFillCaretDownFill} from "@react-icons/all-files/bs/BsFillCaretDownFill";

function AllVendorTop(props) {
    // context api
    const {allVendorsForTable, setAllVendorsForTable} = useContext(VendorContext)
    // sotre
    const allVendors = useSelector(state => state.vendors.allVendors)

    // state
    const [filter, setFilter] = useState("")
    const [searchKey, setSearchKey] = useState("")

    // searching all vendor
    useEffect(() => {
        if (allVendors.length != 0) {
            let filteredData = allVendors.filter((data, i) => {

                // if filter select all data
                if (filter == "") {
                    // if search key == blank
                    if (searchKey == "") {
                        return data
                    }
                    // if search has value
                    else if (data.vendor_name.toLowerCase().includes(searchKey.toLowerCase())) {
                        return data
                    }
                } // all data end

                // if filter select paid
                else if (filter == 0) {
                    if (data.total_due_amount == "0") {
                        // if search key == blank
                        if (searchKey == "") {
                            return data
                        }
                        // if search has value
                        else if (data.vendor_name.toLowerCase().includes(searchKey.toLowerCase())) {
                            return data
                        }
                    }
                } // filter paid end

                // if fileter select due
                else if (filter == 1) {
                    if (data.total_due_amount > 0) {
                        // if search key == blank
                        if (searchKey == "") {
                            return data
                        }
                        // if search has value
                        else if (data.vendor_name.toLowerCase().includes(searchKey.toLowerCase())) {
                            return data
                        }
                    }
                } // filter select due end
            }).map(data => {
                // finally returned
                return data
            })

            // set filtered data in all table state
            setAllVendorsForTable(filteredData)

        }
    }, [searchKey, filter])


    return (
        <>
            <div>
                <Form onSubmit={e => e.preventDefault()} className="ps-3 pe-3 ">
                    <Form.Group className="mb-3 allVendorSearchGroup d-inline-block" controlId="formGroupEmail">
                        <Form.Control onChange={e => {
                            setSearchKey(e.target.value)


                        }} className="inputField" type="text"
                                      placeholder="type your search key word"/>
                    </Form.Group>

                    <Form.Group className="allVendorFilterFormGroup d-inline-block" controlId="formGridState">
                        <Form.Select onChange={e => setFilter(e.target.value)} className=" text-white themeBtn">
                            <option value="">All</option>
                            <option value="0">Paid</option>
                            <option value="1">Due</option>
                        </Form.Select>
                        <BsFillCaretDownFill className="allVendorFilterArrow"/>
                    </Form.Group>
                </Form>
                <hr className="mx-2 mt-0" mb-0/>
            </div>
        </>
    );
}

export default AllVendorTop;