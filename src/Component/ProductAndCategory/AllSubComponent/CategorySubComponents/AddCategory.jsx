import React, {useContext, useRef} from 'react';
import {Button, Form} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {ProductAndCategoryContext} from "../../ProductAndCategoryComponent";
import {addCategoryAction, getAllCategoryAction} from "../../../../Redux/actions/ProductAndCategoryAction";

function AddCategory(props) {
    // hooks
    const dispatch = useDispatch()
    const categorySaveBtnRef = useRef()
    const addCategoryFormRef = useRef()

    // context api
    const {
        setLogStatus,
        setToastShow,
        setToastMessage,
        setToastType,
        setCatSubCatForTable,
        categoryDropDownRef,
        setCatForAddSubCat
    } = useContext(ProductAndCategoryContext)

    // hook form
    const {register, handleSubmit, reset, formState: {errors}} = useForm();


    // add category on submit
    const onSubmit = data => {
        const payload = {
            data: data,
            categorySaveBtnRef: categorySaveBtnRef,
            addCategoryFormRef: addCategoryFormRef,
            reset: reset,
            setLogStatus: setLogStatus,
            setToastShow: setToastShow,
            setToastMessage: setToastMessage,
            setToastType: setToastType
        }

        dispatch(addCategoryAction(payload))

        //reset category dropdown
        categoryDropDownRef.current.selectedIndex = 0
        // reset single category and sub category table data
        setCatSubCatForTable(false)
        // reset category data from add sub category
        setCatForAddSubCat(false)

    }

    return (
        <>
            {/*form top lable*/}
            <Form.Label className="formTop mb-4">Add category - </Form.Label>

            {/*add category form*/}
            <Form ref={addCategoryFormRef} onSubmit={handleSubmit(onSubmit)} className="mb-5">
                {/*category name field*/}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="formLable">category name*</Form.Label>
                    <Form.Control
                        className="inputField"
                        type="text"
                        placeholder="type a category name"
                        {...register("categoryName", {required: true})}
                    />

                    {/*validation message handle*/}
                    {errors.categoryName && <span className="text-danger">This field is required!!</span>}
                </Form.Group>

                {/*message/Notes*/}
                <Form.Text className="text-muted ">
                    Fields of category and sub-category must be filled. Please use semantics in these fields.
                    Because they will show in your application
                </Form.Text>

                {/*sub category name field*/}
                <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Label className="formLable">sub-category name*</Form.Label>
                    <Form.Control
                        className="inputField"
                        type="text"
                        placeholder="type a sub-category name"
                        {...register("subCategoryName", {required: true})}
                    />

                    {/*validation message handle*/}
                    {errors.subCategoryName && <span className="text-danger">This field is required!!</span>}
                </Form.Group>


                {/*save button*/}
                <Button ref={categorySaveBtnRef} className="themeBtn" type="submit">
                    Save
                </Button>
            </Form>
        </>
    );
}

export default AddCategory;