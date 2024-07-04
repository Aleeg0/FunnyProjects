import React from 'react';
import ConvertBlock from "./ConvertBlock";
import {CurrencyTypes} from "../../Models/CurrencyTypes";

const Convertor = () => {
    //const [fromCurrency, setFromCurrency] = React.useState<CurrencyTypes>(CurrencyTypes.BYN);

    return (
        <div className="convertor">
            <ConvertBlock/>
            <ConvertBlock/>
        </div>
    );
};

export default Convertor;