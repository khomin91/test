import React, {useContext, useEffect, useRef, memo} from 'react';
import {Button, Form} from "react-bootstrap";
import {AiFillSave} from "@react-icons/all-files/ai/AiFillSave";
import {ProductAndCategoryContext} from "../../ProductAndCategoryComponent";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {updateCategoryAction} from "../../../../Redux/actions/ProductAndCategoryAction";

function EditCatField(props) {
    // context api
    const {
        catForEdit,
        setCatForEdit,
        setLogStatus,
        setToastShow,
        setToastMessage,
        setToastType,
        setCatSubCatForTable
    } = useContext(ProductAndCategoryContext)

    // hook
    const dispatch = useDispatch()

    // ref
    const updateCatBtnRef = useRef()

    // hook form
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    // category update on submit
    const onSubmit = data => {
        const formData = {...data, catId: catForEdit.id}

        const payload = {
            data: formData,
            setLogStatus: setLogStatus,
            updateCatBtnRef: updateCatBtnRef,
            reset: reset,
            setCatForEdit: setCatForEdit,
            setCatSubCatForTable: setCatSubCatForTable,
            setToastShow: setToastShow,
            setToastMessage: setToastMessage,
            setToastType: setToastType,
        }

        dispatch(updateCategoryAction(payload))

    }


    return (
        <>
            {/*category edit field*/}
            <Form onSubmit={handleSubmit(onSubmit)} className="d-flex w-100 ">
                {/*update category field*/}
                <Form.Group className="w-100" controlId="formBasicEmail">
                    <Form.Control
                        defaultValue={catForEdit.category_name}
                        className="inputField"
                        type="text"
                        placeholder="type a sub-category name"
                        {...register("catName", {required: true})}
                    />
                </Form.Group>

                {/*update category button*/}
                <Button ref={updateCatBtnRef} type="submit"
                        className="bg-transparent ms-2 p-0 border-0 themeBtn text-success">
                    <AiFillSave className="editCatSaveBtn"/>
                </Button>
            </Form>

            {/*validation message*/}
            {errors.catName && <span className="text-danger">This field is required</span>}
        </>
    );
}

export default memo(EditCatField);