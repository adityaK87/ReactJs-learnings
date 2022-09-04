// Using Swr hook
import React, { Suspense } from 'react';
// npm install  Swr
import Swr from 'Swr';

const fetcher = (...args) => fetch(...args).then((resp => resp.json()))
const Swr = () => {
    const { data, error } = useSwr("https://dog.ceo/api/breeds/image/random ",
        //getting directly data by using useSwr Hook => {data}
        fetcher, { Suspense: true, } //suspense is built in function in useSwr Hook
    );
    if (error) {
        return <h1>There was an Error</h1>
    };
    return (
        <img src={data.message} width={500} alt="Swr" />
    )
};

export default Swr;