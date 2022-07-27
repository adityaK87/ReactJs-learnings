import React from 'react'
import { useContext } from 'react';
import { AboutMe } from './Note/contextApi/AboutMeState';
// import AboutMeState from './Note/contextApi/AboutMeState';

const AboutMyself = (props) => {
  console.log(props)
   const b = useContext(AboutMe);
  return (
    <div>
   Aditya
    </div>
  )
}

export default AboutMyself;