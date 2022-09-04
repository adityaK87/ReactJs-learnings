// getting data using Axios 
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Axios = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get("https://dog.ceo/api/breeds/image/random") // Type the url here
            .then((resp) => setData(resp.data.message));

    }, [])

    return (
        <div>
            <img src={data} width={500} alt="Axios" />
        </div>

    )
}

export default Axios