import React from 'react';

function SideBarAndContentWrapper(props) {
    return (
        <>
            {/*all wrapper without top nav*/}
            <div id="layoutSidenav">
                {props.children}
            </div>
        </>
    );
}

export default SideBarAndContentWrapper;