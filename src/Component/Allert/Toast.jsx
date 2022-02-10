import React, {useEffect} from 'react';
import SweetAlert from "react-bootstrap-sweetalert";

function Toast({toastShow = false, setToastShow, toastMessage = "success!!", toastType = "success"}) {
    const hideAlert = () => setToastShow = false
    useEffect(() => {
        toastShow == true && setTimeout(() => {
            setToastShow(false)
        }, 2000)
    }, [toastShow])
    return (
        <>
            {/*success toast*/}
            {toastType == "success" && <SweetAlert
                show={toastShow}
                success
                onConfirm={hideAlert}
                showConfirm={false}
            >
                <span className="text-muted">{toastMessage}</span>
            </SweetAlert>}

            {/*danger toast*/}
            {toastType == "danger" && <SweetAlert
                show={toastShow}
                danger
                onConfirm={hideAlert}
                showConfirm={false}
            >
                <span className="text-muted">{toastMessage}</span>
            </SweetAlert>}
        </>
    );
}

export default Toast;