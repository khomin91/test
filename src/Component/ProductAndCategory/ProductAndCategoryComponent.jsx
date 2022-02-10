import React, {createContext, useEffect, useRef, useState} from 'react';
import ProductComponent from "./ProductComponent";
import {authCheck} from "../utility/AuthCheck";
import {Tab, Tabs} from "react-bootstrap";
import CategorySubCategoryComponent from "./CategorySubCategoryComponent";
import "./Css/ProductAndCategoryCss.css"
import {localstorageClear} from "../utility/LocalStorageClear";
import {useNavigate} from "react-router-dom";
import Toast from "../Allert/Toast";
import {useDispatch, useSelector} from "react-redux";
import {getAllCategoryAction} from "../../Redux/actions/ProductAndCategoryAction";


// making context api
export const ProductAndCategoryContext = createContext()


function ProductAndCategoryComponent(props) {
    // hooks
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // ref
    const categoryDropDownRef = useRef()

    // get permission
    const permission = JSON.parse(authCheck().all_permission)

    // redux store
    const catsSubCats = useSelector(state => state.catSubCat.allCatSUbCat)

    // state
    const [logStatus, setLogStatus] = useState(true)
    const [toastShow, setToastShow] = useState(false)
    const [toastMessage, setToastMessage] = useState("")
    const [toastType, setToastType] = useState("success")

    const [allCatsSubCats, setAllCatsSubCats] = useState([])
    const [catSubCatForTable, setCatSubCatForTable] = useState(false)
    const [catForAddSubCat, setCatForAddSubCat] = useState(false)
    const [catForEdit, setCatForEdit] = useState(false)
    const [subCatForEdit, setSubCatForEdit] = useState(false)

    // checking authentication
    useEffect(() => {
        if (logStatus == false) {
            localstorageClear()
            navigate("/login")
        }
    }, [logStatus])


    // call all category sub category axios
    useEffect(() => {
        const payload = {
            setLogStatus: setLogStatus,
            setToastType: setToastType,
            setToastShow: setToastShow,
            setToastMessage: setToastMessage
        }
        dispatch(getAllCategoryAction(payload))
    }, [])

    // setting all category sub category from store to a state lificycle
    useEffect(() => {
        setAllCatsSubCats(catsSubCats)
    }, [catsSubCats])


    // un authorize redirect
    useEffect(() => {
        if (permission.product_r != 1) {
            navigate("/")
        }
    })

    return (
        <>
            {/*context api provider*/}
            <ProductAndCategoryContext.Provider value={{
                setLogStatus: setLogStatus,
                setToastShow: setToastShow,
                setToastMessage: setToastMessage,
                setToastType: setToastType,
                allCatsSubCats: allCatsSubCats,
                setAllCatsSubCats: setAllCatsSubCats,
                catSubCatForTable: catSubCatForTable,
                setCatSubCatForTable: setCatSubCatForTable,
                catForAddSubCat: catForAddSubCat,
                setCatForAddSubCat: setCatForAddSubCat,
                categoryDropDownRef: categoryDropDownRef,
                catForEdit: catForEdit,
                setCatForEdit: setCatForEdit,
                subCatForEdit: subCatForEdit,
                setSubCatForEdit: setSubCatForEdit
            }}>
                <div className="productContainer">

                    <Tabs defaultActiveKey="allProduct" id="uncontrolled-tab-example" className="mt-2 ms-2 mb-3">
                        {/*Product*/}
                        {permission.product_r == "1" && <Tab eventKey="allProduct" title="products">
                            <ProductComponent/>
                        </Tab>}
                        {/*category*/}
                        {permission.product_r == "1" && <Tab eventKey="category" title="category">
                            <CategorySubCategoryComponent/>
                        </Tab>}

                    </Tabs>


                    {/*alert toast*/}
                    <Toast
                        toastType={toastType}
                        toastShow={toastShow}
                        setToastShow={setToastShow}
                        toastMessage={toastMessage}
                    />

                </div>
            </ProductAndCategoryContext.Provider>
        </>
    );
}

export default ProductAndCategoryComponent;