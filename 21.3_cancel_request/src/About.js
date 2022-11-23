import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from './App';

function About() {
     const darkTheme = useContext(ThemeContext);
     const themeStyle = {
       backgroundColor: darkTheme ? "#333" : "#CCC",
       color: darkTheme ? "#CCC" : "#333",

     };
  return <div className='mode' style={themeStyle}>About</div>;
 
}

export default About