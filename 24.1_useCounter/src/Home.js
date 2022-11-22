import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from './App';


function Home() {
     const darkTheme = useContext(ThemeContext);
     const themeStyle = {
       backgroundColor: darkTheme ? "#333" : "#CCC",
       color: darkTheme ? "#CCC" : "#333",
      
     };
  return <div className='mode' style={themeStyle}>Home</div>;
  
}

export default Home;