import { useEffect, useState } from "react";

function useCurrencyInfo(currency){

    const [data, setData] = useState({}) //.then((res))=>setData(res[currency]) isme jo data ayega vo yaha store hoga
    // jaise kisi event ka lifeccycle trigger ho uske liye useEffect use hota
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res)=>setData(res[currency])) // isko store karna hoag

        console.log(data)
    },[currency]) //  useEffect mai 2 cheeze chaiye hoti ek callback and ek array

    return data
}

export default useCurrencyInfo;

// iske baad dekhenge ki components kaise banane so lets go to components folder