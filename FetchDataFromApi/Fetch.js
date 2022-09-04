//  ways to fetch data from api 
// using Fetch 
import React, { useState, useEffect } from 'react';

const Fetch = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const a = fetch("https://dog.ceo/api/breeds/image/random")
        console.log(a) // checking what data inside this url
            .then((resp) => resp.json())//converting data into JSON formate 
            .then((apiData) => setData(apiData.message // Do whatEver we want to do with this data
            ));
    }, []);

    return (
        <img width={500} src={data} alt="dogs"></img>
    )
}

export default Fetch;