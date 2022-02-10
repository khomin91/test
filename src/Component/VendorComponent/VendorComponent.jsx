import React, {createContext, useEffect, useState} from 'react';
import {Tabs, Tab} from "react-bootstrap";
import './Css/vendorCSS.css'
import {authCheck} from "../utility/AuthCheck";
import AddVendorComponent from "./allSubComponent/AddVendorComponent";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {localstorageClear} from "../utility/LocalStorageClear";
import Toast from "../Allert/Toast";
import AllVendorTable from "./allSubComponent/AllVendorTable";
import AllVendorTop from "./allSubComponent/AllVendorTop";
import {getAllVendorAction} from "../../Redux/actions/VendorAction";
import UpdateVendorModal from "./allSubComponent/UpdateVendorModal";
import VendorDetailComponent from "./VendorDetailComponent";

// create context
export const VendorContext = createContext()

function VendorComponent(props) {
    // hooks
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // get permission
    const permission = JSON.parse(authCheck().all_permission)

    // sotre
    const allVendors = useSelector(state => state.vendors.allVendors)

    // state
    const [allVendorsForTable, setAllVendorsForTable] = useState([])

    const [logStatus, setLogStatus] = useState(true)
    const [toastShow, setToastShow] = useState(false)
    const [toastType, setToastType] = useState("")
    const [toastMessage, setToastMessage] = useState("message")
    const [loader, setLoader] = useState(false)
    const [updateModalShow, setUpdateModalShow] = useState(false)
    const [updateModalData, setUpdateModalData] = useState({})
    const [modalShow, setModalShow] = useState(false)
    const [vendorDetail, setVendorDetail] = useState({})

    // checking log status
    useEffect(() => {
        if (logStatus == false) {
            localstorageClear()
            navigate("/login")
        }
    }, [logStatus])

    // call get all vendor from axios
    useEffect(() => {
        const payload = {
            setLogStatus: setLogStatus,
            setLoader: setLoader
        }
        dispatch(getAllVendorAction(payload))

        const interval = setInterval(() => {
            dispatch(getAllVendorAction(payload))
        }, 600000)


        // un mount
        return () => clearInterval(interval)

    }, [])


    // all vendor data for table load from redux store
    useEffect(() => {
        setAllVendorsForTable(allVendors)
    }, [allVendors])


    // un authorize redirect
    useEffect(() => {
        if (permission.vendor_r != 1) {
            navigate("/")
        }
    })
    return (
        <>
            {/*context provider*/}
            <VendorContext.Provider value={{
                setLogStatus: setLogStatus,
                toastShow: toastShow,
                setToastShow: setToastShow,
                toastType: toastType,
                setToastType: setToastType,
                toastMessage: toastMessage,
                setToastMessage: setToastMessage,
                allVendorsForTable: allVendorsForTable,
                setAllVendorsForTable: setAllVendorsForTable,
                loader: loader,
                setLoader: setLoader,
                updateModalShow: updateModalShow,
                setUpdateModalShow: setUpdateModalShow,
                updateModalData: updateModalData,
                setUpdateModalData: setUpdateModalData,
                modalShow: modalShow,
                setModalShow: setModalShow,
                vendorDetail: vendorDetail,
                setVendorDetail: setVendorDetail
            }}>

                {/*tabs*/}
                <div className="productContainer">
                    <Tabs defaultActiveKey="vendors" id="uncontrolled-tab-example" className="mt-2 ms-2 mb-3">
                        {/*all vendor*/}
                        {permission.vendor_r == "1" && <Tab eventKey="vendors" title="vendors">
                            <AllVendorTop/>
                            <AllVendorTable/>
                            <UpdateVendorModal/>
                            <VendorDetailComponent/>
                        </Tab>}
                        {/*add vendor*/}
                        {permission.vendor_c == "1" && <Tab eventKey="addVendor" title="add Vendor">
                            <AddVendorComponent/>
                        </Tab>}

                    </Tabs>


                    {/*success and error toast */}
                    <Toast setToastShow={setToastShow} toastShow={toastShow}
                           toastMessage={toastMessage} toastType={toastType}/>
                </div>

            </VendorContext.Provider>
        </>
    );
}

export default VendorComponent;