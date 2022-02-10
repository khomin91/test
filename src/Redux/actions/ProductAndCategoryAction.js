import {authCheck} from "../../Component/utility/AuthCheck";
import axios from "axios";
import {
    addCategorySubCategory,
    addSubCategory,
    getAllCategorySubCategory,
    updateCategory, updateSubCategory
} from "../../AllRoute/APIRoute";
import {catSubCatSlice} from "../slices/CatSubCatSlice";


// get all category and sub category
export const getAllCategoryAction = payload => dispatch => {
    // making headers
    const headers = authCheck()

    axios.get(getAllCategorySubCategory, {headers}).then(res => {
        // if data get success fully
        if (res.data.status == true) {
            dispatch(catSubCatSlice.actions.getAllCatSubCatReducer(res.data.data))
        }
    }).catch(err => {
        if (payload) {
            // alert toast
            payload.setToastMessage("some thing went wrong. check your internet connection  !!")
            payload.setToastType("danger")
            payload.setToastShow(true)

            // un authorize set
            err.response.status == 401 && payload.setLogStatus(false)
        } else {
            console.log(err)
        }
    })
}


// add category action
export const addCategoryAction = payload => dispatch => {
    // getting parameter
    const {
        data,
        categorySaveBtnRef,
        addCategoryFormRef,
        reset,
        setLogStatus,
        setToastShow,
        setToastMessage,
        setToastType
    } = payload

    // making headers
    const headers = authCheck()

    // add category btn disabled
    categorySaveBtnRef.current.disabled = true

    axios.post(addCategorySubCategory, data, {headers}).then(res => {

        // data saved successfully
        if (res.data.status == true) {
            //refresh all category
            dispatch(getAllCategoryAction())

            // form reset
            addCategoryFormRef.current.reset()
            reset()

            // add category btn enable
            categorySaveBtnRef.current.disabled = false

            // alert toast
            setToastMessage("Category added successfully !!")
            setToastType("success")
            setToastShow(true)
        } else {
            // add category btn enable
            categorySaveBtnRef.current.disabled = false

            // alert toast
            setToastMessage("Maybe your category already exist or some thing went wrong. Try again or refresh your page  !!")
            setToastType("danger")
            setToastShow(true)
        }
    }).catch(err => {
        // add category btn enable
        categorySaveBtnRef.current.disabled = false

        // alert toast
        setToastMessage("Maybe your category already exist or some thing went wrong. Try again or refresh your page  !!")
        setToastType("danger")
        setToastShow(true)

        // un authorize set
        err.response.status == 401 && setLogStatus(false)
    })
}


// add sub category aciton
export const addSubCategoryAction = payload => dispatch => {
    // getting parameter
    const {
        data,
        categoryDropDownRef,
        addSubCategoryBtnRef,
        addSubCategoryFormRef,
        setCatForAddSubCat,
        setCatSubCatForTable,
        setLogStatus,
        setToastShow,
        setToastMessage,
        setToastType,
        reset
    } = payload

    // make headers
    const headers = authCheck()

    // add btn disabled
    addSubCategoryBtnRef.current.disabled = true

    axios.post(addSubCategory, data, {headers}).then(res => {

        // if data saved successfully
        if (res.data.status == true) {
            // refresh all category
            dispatch(getAllCategoryAction())

            // add btn enable
            addSubCategoryBtnRef.current.disabled = false

            // resetting
            categoryDropDownRef.current.selectedIndex = 0
            addSubCategoryFormRef.current.reset()
            reset()

            setCatForAddSubCat(false)
            setCatSubCatForTable(false)
        }
        // if data not saved
        else {
            // add btn enable
            addSubCategoryBtnRef.current.disabled = false

            // alert toast
            setToastMessage("Data not saved. Try again or refresh your page  !!")
            setToastType("danger")
            setToastShow(true)
        }

    }).catch(err => {
        // add btn enable
        addSubCategoryBtnRef.current.disabled = false

        // alert toast
        setToastMessage("Something went wrong. Try again or refresh your page  !!")
        setToastType("danger")
        setToastShow(true)

        // un authorize set
        err.response.status == 401 && setLogStatus(false)
    })

}

// update category action
export const updateCategoryAction = payload => dispatch => {
    // getting parameter
    const {
        data,
        setLogStatus,
        updateCatBtnRef,
        reset,
        setCatForEdit,
        setCatSubCatForTable,
        setToastShow,
        setToastMessage,
        setToastType
    } = payload

    // making headers
    const headers = authCheck()

    // update btn disabled
    updateCatBtnRef.current.disabled = true

    axios.post(updateCategory, data, {headers}).then(res => {
        // if update category successfully
        if (res.data.status == true) {
            // refresh all category
            dispatch(getAllCategoryAction())

            // update btn enable
            updateCatBtnRef.current.disabled = false

            // reset form
            reset()

            // reset table
            setCatSubCatForTable(false)
        }
        // if category updated failed
        else {
            // refresh all category
            dispatch(getAllCategoryAction())

            // update btn enable
            updateCatBtnRef.current.disabled = false

            // alert toast
            setToastMessage("Category updated failed. Try again or refresh your page  !!")
            setToastType("danger")
            setToastShow(true)
        }
    }).catch(err => {
        // update btn enable
        updateCatBtnRef.current.disabled = false

        // alert toast
        setToastMessage("Something went wrong. Try again or refresh your page  !!")
        setToastType("danger")
        setToastShow(true)

        // un authorize set
        err.response.status == 401 && setLogStatus(false)
    })

}

// update sub category action
// update category action
export const updateSubCategoryAction = payload => dispatch => {
    // getting parameter
    const {
        data,
        setLogStatus,
        updateSubCategoryBtnRef,
        setCatSubCatForTable,
        setToastShow,
        setToastMessage,
        setToastType
    } = payload

    // making headers
    const headers = authCheck()

    // update btn disabled
    updateSubCategoryBtnRef.current.disabled = true

    axios.post(updateSubCategory, data, {headers}).then(res => {
        // if update category successfully
        if (res.data.status == true) {
            // refresh all category
            dispatch(getAllCategoryAction())

            // update btn enable
            updateSubCategoryBtnRef.current.disabled = false

            // reset table
            setCatSubCatForTable(false)
        }
        // if category updated failed
        else {
            // refresh all category
            dispatch(getAllCategoryAction())

            // update btn enable
            updateSubCategoryBtnRef.current.disabled = false

            // alert toast
            setToastMessage("Sub category updated failed. Try again or refresh your page  !!")
            setToastType("danger")
            setToastShow(true)
        }
    }).catch(err => {
        // update btn enable
        updateSubCategoryBtnRef.current.disabled = false

        // alert toast
        setToastMessage("Something went wrong. Try again or refresh your page  !!")
        setToastType("danger")
        setToastShow(true)

        // un authorize set
        err.response.status == 401 && setLogStatus(false)
    })

}