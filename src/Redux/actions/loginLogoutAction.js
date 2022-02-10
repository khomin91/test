import axios from "axios";
import {onLogin} from "../../AllRoute/APIRoute";


// login action
export const loginAction = payload => dispatch => {
    // receive parameter
    const {data, loginFormRef, reset, loginBtnRef, setLogStatus, setLogFailedAlert} = payload

    // login btn disabled
    loginBtnRef.current.disabled = true

    axios.post(onLogin, data).then(res => {
        // if login success
        if (res.data.status == true) {
            // login btn enable
            loginBtnRef.current.disabled = false

            // set value in lacalStorage for Authentication
            localStorage.setItem("logData", JSON.stringify(res.data))
            localStorage.setItem("permission", JSON.stringify(res.data.permission))
            localStorage.setItem("feature", JSON.stringify(res.data.features))
            localStorage.setItem("token", res.data.token)


            // set log status for navigate to dashboard
            setLogStatus(true)

            // form reset
            loginFormRef.current.reset()
            reset()
        }
        // if login failed
        else {
            // login btn enable
            loginBtnRef.current.disabled = false

            // show and hide login failed alert
            setLogFailedAlert(true)
            setTimeout(() => {
                setLogFailedAlert(false)
            }, 3000)

        }
    }).catch(err => {
        // login btn enable
        loginBtnRef.current.disabled = false

        // show and hide login failed alert
        setLogFailedAlert(true)
        setTimeout(() => {
            setLogFailedAlert(false)
        }, 3000)
    })
}

// logout action
export const logoutAction = payload => dispatch => {
    // receiving parameter
    const {setLogStatus} = payload
    setLogStatus(false)
}