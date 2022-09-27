import React, { useState } from 'react'

function Increment() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    

    return (
        <>
            <div>This is useState tutorial</div>
            <button onClick={() => setCount => ((c) => c + 1)} > click me</button>
            <div>{count}</div>
        </>
    )
}