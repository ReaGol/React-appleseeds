import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Header from './components/Header';
import Home from './Home';
import './App.css';

export const ThemeContext = createContext()

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

        function toggleTheme() {
          setDarkTheme((prev) => !prev);
        }


  return (
    <ThemeContext.Provider value={darkTheme}>
      <Header toggleTheme={toggleTheme}></Header>

      {/* <Context /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App