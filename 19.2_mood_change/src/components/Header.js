import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { useContext } from "react";
import { ThemeContext } from "../App";

function Header(props) {
// const darkTheme = useContext(ThemeContext);

  return (
    <header className='header'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Homepage</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
      <button onClick={props.toggleTheme}>Change Theme</button>
    </header>
  );
}

export default Header;
