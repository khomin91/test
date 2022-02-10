import React, {useContext, useEffect, useRef, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {AiFillSave} from "@react-icons/all-files/ai/AiFillSave";
import {ProductAndCategoryContext} from "../../ProductAndCategoryComponent";
import {useDispatch} from "react-redux";
import {updateSubCategoryAction} from "../../../../Redux/actions/ProductAndCategoryAction";


function EditSubCatField(props) {
    // hook
    const dispatch = useDispatch()

    // context api
    const {
        subCatForEdit,
        setLogStatus,
        setToastShow,
        setToastMessage,
        setToastType,
        setCatSubCatForTable
    } = useContext(ProductAndCategoryContext)

    // ref
    const subCatNameEditField = useRef()
    const updateSubCategoryBtnRef = useRef()


    // state
    const [subCatName, setSubCatName] = useState(subCatForEdit.sub_category_name)
    const [subCatNameErr, setSubCatErr] = useState(false)


    // setting value in text field
    useEffect(() => {
        setSubCatName(subCatForEdit.sub_category_name)
        subCatNameEditField.current.value = subCatForEdit.sub_category_name
        setSubCatErr(false)
    }, [subCatForEdit])


    // category update on submit
    const onSubmit = e => {
        e.preventDefault()
        // if edit sub category field is null or blank
        if (subCatNameEditField.current.value == "") {
            setSubCatErr(true)
        }
        // if edit sub category field is not null
        else {
            // getting data form field and state
            const formData = {
                subCatId: subCatForEdit.id,
                subCatName: subCatName
            }

            // making payload for update sub category aciton
            const payload = {
                data: formData,
                setLogStatus: setLogStatus,
                updateSubCategoryBtnRef: updateSubCategoryBtnRef,
                setCatSubCatForTable: setCatSubCatForTable,
                setToastShow: setToastShow,
                setToastMessage: setToastMessage,
                setToastType: setToastType,
            }

            dispatch(updateSubCategoryAction(payload))

        }// else block end
    }


    return (
        <>
            {/*sub-category edit Form*/}
            <Form className="d-flex w-100 align-items-center">
                {/*sub category edit field*/}
                <Form.Control
                    ref={subCatNameEditField}
                    defaultValue={subCatName}
                    onChange={e => setSubCatName(e.target.value)}
                    className="inputField"
                    type="text"
                    placeholder="type a sub-category name"
                />

                {/*sub category edit submit button*/}
                <Button ref={updateSubCategoryBtnRef} onClick={e => onSubmit(e)} type="submit"
                        className="bg-transparent ms-2 p-0 border-0 themeBtn text-success">
                    <AiFillSave className="editCatSaveBtn"/>
                </Button>
            </Form>

            {/*validation message*/}
            {subCatNameErr && <span className="text-danger">This field is required</span>}
        </>
    );
}

export default EditSubCatField;