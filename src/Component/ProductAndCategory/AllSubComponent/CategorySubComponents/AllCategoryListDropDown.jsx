import React, {useContext, useEffect} from 'react';
import {Container, Form} from "react-bootstrap"
import {BsFillCaretDownFill} from "@react-icons/all-files/bs/BsFillCaretDownFill";
import {ProductAndCategoryContext} from "../../ProductAndCategoryComponent";

function AllCategoryListDropDown(props) {
    // getting parameter from props
    const {dropDownFrom = "table"} = props

    // context api
    const {
        allCatsSubCats,
        setCatSubCatForTable,
        setCatForAddSubCat,
        categoryDropDownRef,
        setCatForEdit
    } = useContext(ProductAndCategoryContext)


    // category dropdown onchange
    const catOnChange = (e) => {
        // getting attributes in string format
        const data = e.target[e.target.selectedIndex].getAttribute("data-value")

        // make the string attribute value in JSON for set it in state
        const jsonData = JSON.parse(data)

        if (dropDownFrom == "table") {
            // set the json value in state
            setCatSubCatForTable(jsonData)

            // reset edit cat field
            setCatForEdit(false)
        } else {
            // set category for add sub category
            setCatForAddSubCat(jsonData)
        }
    }

    // reset dropdown
    useEffect(() => {
        document.getElementById("catDropDown").selectedIndex = 0
    }, [allCatsSubCats])
    return (
        <>
            <Form.Select id="catDropDown" ref={categoryDropDownRef} onChange={e => catOnChange(e)}
                         className="inputField">
                {allCatsSubCats.length == 0 ? <option data-value={false}>Loading wait.....</option> :
                    <option data-value={false}>--select--</option>}
                {allCatsSubCats.map((data, i) => (
                    <option data-value={JSON.stringify(data)}>{data.category_name}</option>
                ))}
            </Form.Select>


        </>
    );
}

export default AllCategoryListDropDown;