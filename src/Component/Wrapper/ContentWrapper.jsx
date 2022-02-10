import React from 'react';

function ContentWrapper(props) {
    return (
        <>
            {/*other content*/}
            <div id="layoutSidenav_content">
                {props.children}
            </div>
        </>
    );
}

export default ContentWrapper;