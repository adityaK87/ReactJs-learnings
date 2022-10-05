import React, { useState } from 'react';
import { useEffect } from 'react';

const App = (/*{ people }*/) => {

    //What we are getting when we console useState for the first time 
    // it returns an Empty Array with length 2
    // const what =useState();
    // console.log(what)
    // (2) [undefined, ƒ] 0: undefined  1: ƒ ()length: 2[[Prototype]]: Array(0)

    const [emotion, setEmotion] = useState("happy")

    useEffect(() => {
        console.log(`It's ${emotion} right now `)
    },[emotion])
    return (
        <div >
            <h1>
                Current Emotion is {emotion}
            </h1>
            <button onClick={() => setEmotion("sad")}>sad</button>
            <button onClick={() => setEmotion("exited")}>exited</button>

        </div>
    )
}
export default App;