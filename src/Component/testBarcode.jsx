import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Barcode from "react-barcode";
import {Col, Row} from "react-bootstrap";

function TestBarcode(props) {
    const item = [
        {itemName: "chips", size: "12gm", barCode: "95228957", price: "10", qty: "3"}
    ]
    const [itemArr, setItemArr] = useState([])


    useEffect(() => {
        const qtyWiseItem = []

        item.map((data, i) => {
            const itemObj = {}
            for (let i = 0; i < data.qty; i++) {
                itemObj.itemName = data.itemName
                itemObj.barCode = data.barCode
                itemObj.size = data.size
                itemObj.price = data.price
                qtyWiseItem.push(itemObj)
            }

        })

        setItemArr(qtyWiseItem)
    }, [])

    console.log(itemArr)

    return (
        <>



            <Row>
                {itemArr.length != 0 && itemArr.map((data, i) => (
                    <Col lg={2} md={2} sm={2} xs={2}>
                        <div style={{width: "90px", height: "93px", overflow: "hidden"}}
                             className="d-flex mb-2 mt-1  flex-column justify-content-center align-items-center">
                            <span className="" style={{fontSize: "10px"}}>{data.itemName}</span>
                            <span className="" style={{fontSize: "10px"}}>size - {data.size}</span>
                            <Barcode
                                width={1}
                                margin={1}
                                height={25}
                                displayValue={false}
                                className="img-fluid"
                                value={data.barCode}/>

                            <span className="" style={{fontSize: "10px"}}>{data.barCode}</span>
                            <span className="" style={{fontSize: "10px"}}>MRP- {data.price}tk</span>
                        </div>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default TestBarcode;