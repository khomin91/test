import React, {useContext, useEffect, useRef, useState} from 'react';
import {Alert, Button, Form} from "react-bootstrap";
import AllCategoryListDropDown from "./AllCategoryListDropDown";
import {BsFillCaretDownFill} from "@react-icons/all-files/bs/BsFillCaretDownFill";
import {ProductAndCategoryContext} from "../../ProductAndCategoryComponent";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addSubCategoryAction} from "../../../../Redux/actions/ProductAndCategoryAction";

function AddSubCategory(props) {
    // context api
    const {
        catForAddSubCat,
        setCatForAddSubCat,
        setCatSubCatForTable,
        categoryDropDownRef,
        setLogStatus,
        setToastShow,
        setToastMessage,
        setToastType,
    } = useContext(ProductAndCategoryContext)

    // hooks
    const dispatch = useDispatch()

    // ref
    const addSubCategoryFormRef = useRef()
    const addSubCategoryBtnRef = useRef()

    // react hook form
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    // state
    const [categoryValidation, setCategoryValidation] = useState(true)

    // category validation check lifecycle
    useEffect(() => {

    }, [categoryValidation])


    // sub category on submit
    const onSubmit = data => {
        // check category validation
        if (catForAddSubCat == false) {
            setCategoryValidation(false)
            setTimeout(() => {
                setCategoryValidation(true)
            }, 3000)
        }
        // if all data validate
        else {
            const formData = {...data, categoryId: catForAddSubCat.id}

            const payload = {
                data: formData,
                categoryDropDownRef: categoryDropDownRef,
                addSubCategoryBtnRef: addSubCategoryBtnRef,
                addSubCategoryFormRef: addSubCategoryFormRef,
                setCatForAddSubCat: setCatForAddSubCat,
                setCatSubCatForTable: setCatSubCatForTable,
                setLogStatus: setLogStatus,
                setToastShow: setToastShow,
                setToastMessage: setToastMessage,
                setToastType: setToastType,
                reset: reset
            }

            dispatch(addSubCategoryAction(payload))
        } // else block end
    }


    return (
        <>
            <Form.Label className="formTop mb-4">Add sub-category - </Form.Label>
            {/*<p>{catForAddSubCat != false && catForAddSubCat.id}</p>*/}
            <Form ref={addSubCategoryFormRef} onSubmit={handleSubmit(onSubmit)}>
                {/*category lisr*/}
                <Form.Group className="mb-4 dropDown" controlId="formBasicEmail">
                    <Form.Label className="formLable">Choose parent Category*</Form.Label>
                    {/*all category dropdown*/}
                    <AllCategoryListDropDown dropDownFrom="add sub category"/>
                    <BsFillCaretDownFill className="DropDownArrow"/>
                </Form.Group>

                {/*message*/}
                <Form.Text className="text-muted ">
                    To add a subcategory, you must select a category first. Note that each sub-category is included in a
                    parent category. Please use semantics in these fields.
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

                    {/*validation message*/}
                    {errors.subCategoryName && <span className="text-danger">This field is required</span>}

                </Form.Group>

                <Button ref={addSubCategoryBtnRef} className="themeBtn" type="submit">
                    Add
                </Button>

                {/*category validation check message*/}
                {categoryValidation == false && <Alert className="text-center mt-3 w-100" variant="danger">
                    <span>Please choose a category first!!</span>
                </Alert>}


            </Form>
        </>
    );
}

export default AddSubCategory;