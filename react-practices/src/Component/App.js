import React, { useState } from 'react';
import { useEffect, useRef } from 'react';

const App = (/*{ people }*/) => {

    //What we are getting when we console useState for the first time 
    // it returns an Empty Array with length 2
    // const what =useState();
    // console.log(what)
    // (2) [undefined, ƒ] 0: undefined  1: ƒ ()length: 2[[Prototype]]: Array(0)

    const [emotion, setEmotion] = useState("happy")

    useEffect(() => {
        console.log(`It's ${emotion} right now `)
    }, [emotion]);

    const txtTitle = useRef();
    const hexColor = useRef();

    console.log(txtTitle, hexColor)

    const submit = (e) => {
        e.preventDefault();
        const title = txtTitle.current.value;
        const color = hexColor.current.value;
        alert(`${title} , ${color}`);
        txtTitle.current.value = " ";
        hexColor.current.value = " ";
    }


    return (
        <div >
            <h1>
                Current Emotion is {emotion}
            </h1>
            <button onClick={() => setEmotion("sad")}>sad</button>
            <button onClick={() => setEmotion("exited")}>exited</button>
            <form onSubmit={submit}>
                <input type="text" placeholder='Color Name...' ref={txtTitle} />
                <input type="color" ref={hexColor} />
                <button>Add</button>
            </form>


        </div>
    )
}
export default App;