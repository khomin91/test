import React, {useContext} from 'react';
import {Button, Container, Form, Table} from "react-bootstrap";
import {FiEdit} from "@react-icons/all-files/fi/FiEdit";
import {AiTwotoneDelete} from "@react-icons/all-files/ai/AiTwotoneDelete";
import {ProductAndCategoryContext} from "../../ProductAndCategoryComponent";
import {AiFillSave} from "@react-icons/all-files/ai/AiFillSave";
import {GiCancel} from "@react-icons/all-files/gi/GiCancel";
import EditCatField from "./EditCatField";
import {authCheck} from "../../../utility/AuthCheck";

function SingleCategoryTable(props) {
    // get permission
    const permission = JSON.parse(authCheck().all_permission)

    // context api
    const {
        catSubCatForTable,
        catForEdit,
        setCatForEdit
    } = useContext(ProductAndCategoryContext)


    // edit on click
    const editOnClickl = () => {
        setCatForEdit(catSubCatForTable)
    }
    // edit cancell on click
    const editCancelOnClick = () => {
        setCatForEdit(false)
    }

    return (
        <>
            <Container fluid={true}>
                <Table bordered className="htmlTbl">
                    <thead className="appTable">
                    <tr>

                        <th>Category Name &nbsp; &nbsp; &nbsp; &nbsp; </th>
                        <th className="text-center">Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    {/*if category found*/}
                    {catSubCatForTable != false && <tr>

                        <td className="appTblWidth">
                            {/*edit category*/}
                            {catForEdit != false ? <EditCatField/> :
                                // cell data
                                catSubCatForTable.category_name}
                        </td>

                        <td className="text-center">
                            {/*edit cancel*/}
                            {permission.product_u == "1" && <> {catForEdit != false ?
                                <GiCancel onClick={editCancelOnClick} className="vendorView me-2 "/> :
                                // edit button
                                <FiEdit onClick={editOnClickl} className="vendorView"/>}</>}


                            {/*delete button*/}
                            {permission.product_d == "1" && <AiTwotoneDelete className="vendorTrash"/>}

                            {/*no action message*/}
                            {permission.product_d != "1" && permission.product_u && "you have no action permission"}
                        </td>
                    </tr>}

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

export default SingleCategoryTable;