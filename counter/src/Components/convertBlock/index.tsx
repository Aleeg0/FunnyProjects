import React from 'react';
import ConvertBlock from "./ConvertBlock";
import {CurrencyTypes} from "../../Models/CurrencyTypes";

const Convertor = () => {
    const [fromCurrency, setFromCurrency] = React.useState<CurrencyTypes>(CurrencyTypes.BYN);
    const [toCurrency, setToCurrency] = React.useState<CurrencyTypes>(CurrencyTypes.USD);

    const allTypes: CurrencyTypes[] = [CurrencyTypes.BYN, CurrencyTypes.RUB,CurrencyTypes.USD,CurrencyTypes.EUR];

    return (
        <div className="convertor">
            <ConvertBlock
                currencyTypes={allTypes}
                currency={fromCurrency}
                onClickCurrency={setFromCurrency}
            />
            <ConvertBlock
                currencyTypes={allTypes}
                currency={toCurrency}
                onClickCurrency={setToCurrency}
            />
        </div>
    );
};

export default Convertor;