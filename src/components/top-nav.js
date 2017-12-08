import React from 'react';
import {NavLink} from 'react-router-dom';

export default function TopNav(props) {
  return (
    <nav>
    <NavLink exact to="/dashboard" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/articles/" activeClassName="active">
        Previous Lessons
      </NavLink>
    </nav> 
  )
}
