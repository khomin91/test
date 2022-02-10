import axios from "axios";
import {authCheck} from "../../Component/utility/AuthCheck";
import {addVendor, getAllVendor, updateVendor} from "../../AllRoute/APIRoute";
import {vendorSlice} from "../slices/VendorSlice";


// get all vendor
export const getAllVendorAction = payload => dispatch => {
    // making headers
    const headers = authCheck()

    // loading animation start
    payload && payload.setLoader(true)


    axios.get(getAllVendor, {headers}).then(res => {
        // if data get successfully
        if (res.data.status == true) {
            // loading animation end
            payload && payload.setLoader(false)

            // setting data in store
            dispatch(vendorSlice.actions.getAllVendorsReducer(res.data.data))
        }
        // if data can't get
        else {
            // loading animation end
            payload && payload.setLoader(false)
        }
    }).catch(err => {
        // loading animation end
        payload && payload.setLoader(false)

        err.response.status == 401 && payload && payload.setLogStatus(false)
    })

}


// add vendor
export const addVendorAction = payload => dispatch => {
    // receiving parameter
    const {
        data,
        addVendorFormRef,
        addVendorBtnRef,
        reset,
        setToastShow,
        setToastType,
        setToastMessage,
        setLogStatus
    } = payload

    // making header for authentication
    const headers = authCheck()

    // disable button
    addVendorBtnRef.current.disabled = true

    axios.post(addVendor, data, {headers}).then(res => {
        // if vendor added successfully
        if (res.data.status == true) {
            // refresh all vendor
            dispatch(getAllVendorAction())

            // enable button
            addVendorBtnRef.current.disabled = false

            //form resetting
            addVendorFormRef.current.reset()
            reset()

            // toast setting
            setToastShow(true)
            setToastType("success")
            setToastMessage("vendor added successfully !! ")
        } else {
            // enable button
            addVendorBtnRef.current.disabled = false

            // toast setting
            setToastShow(true)
            setToastType("danger")
            setToastMessage("vendor not saved! please try again.")
        }
    }).catch(err => {
        // enable button
        addVendorBtnRef.current.disabled = false

        // toast setting
        setToastShow(true)
        setToastType("danger")
        setToastMessage("something went wrong !! ")

        err.response.status == 401 && setLogStatus(false)
    })

}

// update vendor action
export const updateVendorAction = payload => dispatch => {
    // receiving parameter from payload
    const {
        data,
        updateVendorFormRef,
        updateVendorBtnRef,
        reset,
        setUpdateModalShow,
        setToastShow,
        setToastType,
        setToastMessage,
        setLogStatus
    } = payload

    // making headers
    const headers = authCheck()

    // disable button
    updateVendorBtnRef.current.disabled = true


    axios.post(updateVendor, data, {headers}).then(res => {
        // if data update success
        if (res.data.status == true) {
            // refresh all vendor
            dispatch(getAllVendorAction())

            // enable button
            updateVendorBtnRef.current.disabled = false

            // close modal
            setUpdateModalShow(false)
        } else {
            // refresh all vendor
            dispatch(getAllVendorAction())

            // enable button
            updateVendorBtnRef.current.disabled = false

            // close modal
            setUpdateModalShow(false)

            // toast show after 1 sec of modal close
            setTimeout(() => {
                // toast setting
                setToastShow(true)
                setToastType("danger")
                setToastMessage("data not updated. try again !! ")
            }, 300)
        }

    }).catch(err => {
        // enable button
        updateVendorBtnRef.current.disabled = false

        // close modal
        setUpdateModalShow(false)

        // toast show after 1 sec of modal close
        setTimeout(() => {
            // toast setting
            setToastShow(true)
            setToastType("danger")
            setToastMessage("something went wrong !! ")
        }, 300)

        err.response.status == 401 && setLogStatus(false)
    })
}