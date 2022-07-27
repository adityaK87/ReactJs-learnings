import React, { useContext } from 'react'
// import Component3 from './Component3';
import {FirstName,LastName} from "../App"

const Component2 = () => {
    const fName = useContext(FirstName);
    const lName = useContext(LastName);
    
  return (
    <h1>My name is {fName } {lName}</h1>
  );
}

export default Component2;