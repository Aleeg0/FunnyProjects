import React, {FC} from 'react';

interface ConvertBlockProps {
    currencyTypes: string[];
    currency: string;
    onClickCurrency: (currency: string) => void
    value:number;
    onChangeValue: (value:number) => void;
}

const ConvertBlock: FC<ConvertBlockProps> = ({currencyTypes,currency,onClickCurrency,
                                                 value,onChangeValue}) => {

    const [isMoreOpen, setIsMoreOpen] = React.useState(false);
    const defaultTypes = ["BYN","RUB","USD","EUR"];

    return (
        <div className="convertBlock">
            <div className="convertBlock__types">
                <ul>
                    {defaultTypes.map((type, index) => (
                        <li key={index}
                            className={type === currency ? "active" : ""}
                            onClick={() => onClickCurrency(type)}
                        >{type}</li>
                    ))}
                    <li
                        className={isMoreOpen ? "less" : "more"}
                        onClick={() => setIsMoreOpen(!isMoreOpen)}
                    >
                        <svg viewBox="0 0 50 50">
                            <rect fill="none"/>
                            <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 "/>
                        </svg>
                    </li>
                    {
                        isMoreOpen &&
                        <div className="dropdown-menu">
                            <ul>
                                {
                                    currencyTypes.filter((type) => !defaultTypes.includes(type))
                                    .map((type, index) => (
                                        <li
                                            key={index}
                                            className={type === currency ? "active" : ""}
                                            onClick={() => onClickCurrency(type)}
                                        >{type}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    }

                </ul>
            </div>
            <div className="convertBlock__input">
                <input
                    value={value}
                    onChange={(event) => {
                        onChangeValue(event.target.valueAsNumber)
                    }}
                    type="number"
                    className="convertInput"
                />
            </div>
        </div>
    );
};

export default ConvertBlock;