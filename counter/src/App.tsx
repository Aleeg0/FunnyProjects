import React, {useEffect, useRef, useState} from 'react';
import Convertor from "./Components/convertBlock";
import {CurrencyApiClient, LatestResponse} from "./API/currencyAPI/CurrencyAPI";

const API_KEY = "cur_live_lBfeZrnYZm14XUzmHN1pXglWaLAOFoYMZnyzMxnk";

function App() {

    const rates = useRef<LatestResponse|null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const currencyAPI = new CurrencyApiClient(API_KEY);

    useEffect(() => {
        currencyAPI.getLatestRates()
        .then(resp => {
            rates.current = resp;
            setIsLoading(false);
            console.log(resp);
        })
        .catch((er) => {
            console.log(er);
        })
    }, []);

    return(
        <div className="app">
            {
                isLoading ?
                    <p>Loading...</p>
                    :
                    <Convertor
                        rates={rates.current!}
                    />
            }
        </div>
    );
}

export default App;
