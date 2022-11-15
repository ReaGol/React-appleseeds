import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './MainHeaderModule.css';
function Header() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} href='/home'>
              Homepage
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} href='/products'>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header