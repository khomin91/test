import React from 'react';
import loader from "../../assets/images/themeSpinner.svg"

function ThemeSpinner(props) {
    return (
        <>
            <img className="img-fluid" src={loader}/>
        </>
    );
}

export default ThemeSpinner;