import NumberFormat from "react-number-format";

export const NumberSeperator = (value = 0) => {
    return <NumberFormat
        thousandsGroupStyle="lakh"
        value={value}
        suffix=" /-"
        decimalSeparator="."
        decimalScale={2}
        fixedDecimalScale={true}
        displayType="text"
        type=""
        thousandSeparator={true}
        allowNegative={true}/>
}

