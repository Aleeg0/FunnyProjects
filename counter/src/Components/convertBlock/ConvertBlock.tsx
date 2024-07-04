import React, {FC} from 'react';
import {CurrencyTypes} from "../../Models/CurrencyTypes";

interface ConvertBlockProps {
    currencyTypes: CurrencyTypes[];
    currency: CurrencyTypes;
    onClickCurrency: (currency: CurrencyTypes) => void;
}

const ConvertBlock: FC<ConvertBlockProps> = ({currencyTypes,currency,onClickCurrency}) => {
    return (
        <div className="convertBlock">
            <div className="convertBlock__types">
                <ul>
                    {currencyTypes.map((type, index) => (
                        <li key={index}
                            className={type === currency ? "active" : ""}
                            onClick={() => onClickCurrency(type)}
                        >{type}</li>
                    ))}
                    <li>
                        <svg viewBox="0 0 50 50">
                            <rect fill="none"/>
                            <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 "/>
                        </svg>
                    </li>
                </ul>
            </div>
            <div className="convertBlock__input">
                <input
                    type="number"
                    className="convertInput"
                    placeholder="0"
                />
            </div>
        </div>
    );
};

export default ConvertBlock;