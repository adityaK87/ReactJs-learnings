// getting data by  four different ways
import React, { Suspense } from 'react';
import Axios from './Axios';
import Fetch from './Fetch';
import Swr from './Swr';


const App = () => {
    return (

        <Suspense fallback={<h1>...Loading</h1>}>
            <Swr />
        </Suspense>
    )

}

export default App;