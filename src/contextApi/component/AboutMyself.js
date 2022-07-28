import React from 'react'
import { useContext } from 'react';
import { AboutMe } from './Note/contextApi/AboutMeState';

//Geting Data from AboutMe context
const AboutMyself = () => {
  // console.log(props)
  const b = useContext(AboutMe); //using context by useContext Hook
  console.log(b)
  return (
    <div>
      <h1>{b.MySelf.map(({ FirstName, LastName, subject }) => { //This MySelf array is define inside AboutMe State 
        return (
          <div key={FirstName}>
            <h1 >{FirstName} {LastName} {subject}</h1>
          </div>
        )
      })}</h1>
    </div>
  )
};

export default AboutMyself;