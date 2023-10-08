import { useState, useEffect } from "react";

// const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data[currency]);
            });
        console.log(data);
    }, [currency]);

    console.log(data);
    return data;
}

export default useCurrencyInfo;
