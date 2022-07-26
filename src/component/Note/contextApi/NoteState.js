import React, { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
    const s1 = {
        "name": "Saurabh",
        "class": "10"
    };

    const [state, setState] = useState(s1)
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Gaurav",
                "class": "10a"
            });
        }, 1000);}

    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;

