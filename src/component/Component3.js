import React from 'react'
import { FirstName ,LastName } from '../App';

const Component3 = () => {
    return (
        <>
            <FirstName.Consumer>
                {(FirstName) => {
                    return(
                        <LastName.Consumer>
                            {(LastName) => {
                                return  <h1>My Name is {FirstName} {LastName}</h1>
                            }}
                        </LastName.Consumer>
                    )                   
                }}
            </FirstName.Consumer>
        </>
    )
}

export default Component3;