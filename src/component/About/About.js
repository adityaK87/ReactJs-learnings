import React, { useEffect } from 'react';
import './About.css';
import { useContext } from 'react';
import NoteContext from '../Note/contextApi/NoteContext';

const About = () => {

    const a = useContext(NoteContext);
    useEffect(() => {
        a.update()
        // eslint-disable-next-line
    }, []);

    return(
        
        <div>This is the About {a.state.name} and he in class {a.state.class}</div>

    )};
export default About;