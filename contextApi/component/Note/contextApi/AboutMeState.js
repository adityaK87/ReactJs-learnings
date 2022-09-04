import React from 'react'
import { createContext } from 'react'
export const AboutMe = createContext() //creating context AboutMe by using createContext

const AboutMeState = ({ children }) => {
    const MySelf = [{
        FirstName: "Aditya",
        LastName: "pal",
        class: 12,
        subject: "Science"
    }];
    // console.log(MySelf)
    return (
        //Context provides a way to pass data through the component tree without having to pass props down manually at every level.
        <AboutMe.Provider value = {{MySelf}}>
            {children}
        </AboutMe.Provider>
    );
}

export default AboutMeState;