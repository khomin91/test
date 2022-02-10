import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {localstorageClear} from "../utility/LocalStorageClear";
import {logoutAction} from "../../Redux/actions/loginLogoutAction";

function TopNav(props) {
    // hooks
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // state
    const [logStatus, setLogStatus] = useState(true)

    useEffect(() => {
        if (logStatus == false) {
            localstorageClear()
            navigate("/login")
        }
    }, [logStatus])

    // logout on click
    const onLogout = (e) => {
        e.preventDefault()
        const payload = {setLogStatus: setLogStatus}
        dispatch(logoutAction(payload))
    }


    return (
        <>
            <nav className="sb-topnav navbar navbar-expand topNavBg">
                {/* Navbar Search*/}
                <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"></form>
                {/* Navbar*/}
                <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false"><i className="text-white fas fa-user fa-fw"/></a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#!">Settings</a></li>
                            <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a onClick={e => onLogout(e)} className="dropdown-item" href="#!">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>

        </>
    );
}

export default TopNav;