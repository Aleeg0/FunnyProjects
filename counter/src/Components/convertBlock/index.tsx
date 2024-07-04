import React, {FC, useEffect} from 'react';
import ConvertBlock from "./ConvertBlock";
import {CurrencyTypes} from "../../Models/CurrencyTypes";
import {LatestResponse} from "../../API/currencyAPI/CurrencyAPI";

interface ConvertorProps {
    rates: LatestResponse;
}

const Convertor:FC<ConvertorProps> = ({rates}) => {

    const [fromCurrency, setFromCurrency] = React.useState<CurrencyTypes>(CurrencyTypes.BYN);
    const [toCurrency, setToCurrency] = React.useState<CurrencyTypes>(CurrencyTypes.USD);
    const [fromValue, setFromValue] = React.useState<number>(0);
    const [toValue, setToValue] = React.useState<number>(0);

    const allTypes: CurrencyTypes[] = [CurrencyTypes.BYN, CurrencyTypes.RUB,CurrencyTypes.USD,CurrencyTypes.EUR];

    const onChangeFromValue = (value: number) => {
        setFromValue(value);
        setToValue(Number((value * rates.data[fromCurrency].value
            / rates.data[toCurrency].value).toFixed(3)));
    }

    const onChangeToValue = (value: number) => {
        setToValue(value);
        setFromValue(Number((rates.data[fromCurrency].value
            / rates.data[toCurrency].value * value).toFixed(3)));
    }

    useEffect(() => {
        onChangeFromValue(fromValue);
    }, [fromCurrency]);

    useEffect(() => {
        onChangeToValue(toValue);
    }, [toCurrency]);

    return (
        <div className="convertor">
            <ConvertBlock
                currencyTypes={allTypes}
                currency={fromCurrency}
                onClickCurrency={setFromCurrency}
                value={fromValue}
                onChangeValue={onChangeFromValue}
            />
            <ConvertBlock
                currencyTypes={allTypes}
                currency={toCurrency}
                onClickCurrency={setToCurrency}
                value={toValue}
                onChangeValue={onChangeToValue}
            />
        </div>
    );
};

export default Convertor;