import React, {useContext, useEffect} from 'react';
import {Container, Table} from "react-bootstrap";
import {FiEdit} from "@react-icons/all-files/fi/FiEdit";
import {AiTwotoneDelete} from "@react-icons/all-files/ai/AiTwotoneDelete";
import {ProductAndCategoryContext} from "../../ProductAndCategoryComponent";
import {GiCancel} from "@react-icons/all-files/gi/GiCancel";
import EditSubCatField from "./EditSubCatField";
import {authCheck} from "../../../utility/AuthCheck";

function AllSubCategoryTable(props) {
    // get permission
    const permission = JSON.parse(authCheck().all_permission)

    // context api
    const {catSubCatForTable, setSubCatForEdit} = useContext(ProductAndCategoryContext)

    const reset = () => {
        try {
            if (catSubCatForTable != false) {
                catSubCatForTable.sub_categories.map((data, i) => {
                    // hide edit field
                    document.getElementById("editField" + i + 1).classList.add("d-none")
                    // show table data
                    document.getElementById("tableData" + i + 1).classList.remove("d-none")

                    // show edit button
                    document.getElementById("editBtn" + i + 1).classList.remove("d-none")
                    // hide edit cancel button
                    document.getElementById("editCancel" + i + 1).classList.add("d-none")
                })
            }
        } catch (e) {

        }
    }

    // reset all edit field on render time
    useEffect(() => {
        reset()
    }, [catSubCatForTable])


    // edit on click
    const editOnClick = (i = 0) => {
        // set table data to edit field
        const data = {...catSubCatForTable.sub_categories[i]}
        setSubCatForEdit(data)

        reset()

        // show edit field
        document.getElementById("editField" + i + 1).classList.remove("d-none")
        // hide table data
        document.getElementById("tableData" + i + 1).classList.add("d-none")

        // hide edit button
        document.getElementById("editBtn" + i + 1).classList.add("d-none")
        // show edit cancel button
        document.getElementById("editCancel" + i + 1).classList.remove("d-none")


    }

    // edit cancel on click
    const editCancelOnClick = (i = 0) => {
        // hide edit field
        document.getElementById("editField" + i + 1).classList.add("d-none")
        // show table data
        document.getElementById("tableData" + i + 1).classList.remove("d-none")

        // show edit button
        document.getElementById("editBtn" + i + 1).classList.remove("d-none")
        // hide edit cancel button
        document.getElementById("editCancel" + i + 1).classList.add("d-none")

    }

    return (
        <>
            <Container fluid={true}>
                <Table bordered className="htmlTbl">
                    <thead className="appTable">
                    <tr>

                        <th>Sub-category Name</th>
                        <th className="text-center">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {catSubCatForTable != false && catSubCatForTable.sub_categories.map((data, i) => (
                        <tr key={i}>
                            <td className="appTblWidth">
                                {/*table data*/}
                                <div id={"tableData" + i + 1}>
                                    {data.sub_category_name}
                                </div>

                                {/*edit field*/}
                                <div id={"editField" + i + 1} className="d-none">
                                    <EditSubCatField/>
                                </div>
                            </td>
                            <td className="text-center">


                                {/*edit cancel*/}
                                {permission.product_u == "1" && <> {/*edit cancel*/}
                                    <GiCancel onClick={e => editCancelOnClick(i)} id={"editCancel" + i + 1}
                                              className="d-none editCancel vendorView me-2"/>
                                    {/*edit button*/}
                                    <FiEdit id={"editBtn" + i + 1} onClick={e => editOnClick(i)}
                                            className="vendorView"/>
                                </>}


                                {/*delete button*/}
                                {permission.product_d == "1" && <AiTwotoneDelete className="vendorTrash"/>}

                                {/*no action message*/}
                                {permission.product_d != "1" && permission.product_u && "you have no action permission"}
                            </td>
                        </tr>
                    ))}

                    {/*if category not found*/}
                    {catSubCatForTable == false && <tr>
                        <td colSpan={2}>No data for show please select a category...</td>
                    </tr>}

                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default AllSubCategoryTable;