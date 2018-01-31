import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {menuToggle, logout} from '../actions';
import './header.css';
import TopNav from './top-nav';

export function Header(props) {

  let dropDownMenu;

  if(props.menuOpen){
    dropDownMenu = (
      <div className='dropdown-menu col-3'>
        <div className='menu-option to-home'>
          <NavLink exact to="/dashboard" activeClassName="active" onClick={() => props.dispatch(menuToggle())} >
            Home
          </NavLink>
        </div>
        <div className='menu-option to-new'>
          <NavLink exact to="/articleform" activeClassName="active" onClick={() => props.dispatch(menuToggle())} >
            New Lesson
          </NavLink>
        </div>
        <div className='menu-option to-previous'>
          <NavLink to="/articles/" activeClassName="active" onClick={() => props.dispatch(menuToggle())} >
            Previous Lessons
          </NavLink>
        </div>
        <div className='menu-option to-about'>
          <NavLink to="/" activeClassName="active" onClick={() => props.dispatch(menuToggle())} >
            About
          </NavLink>
        </div>
        <div className='menu-option to-log-out'>
          <button onClick={() => props.dispatch(logout())}>Log Out</button>
        </div>
      </div>
    );
  }

  return (
    <header className="header">
      <div className="head-box">
        <h1 className="main-title">Daily Learner</h1>
        <h2 className="subtitle">Tracking life lessons one day at a time</h2>
        {dropDownMenu}
        <button className="menu-button col-2" onClick={() =>props.dispatch(menuToggle())}></button> 
        {/* make button toggle menu state */}
        {/* menu has absolute position - ignore everything else, put it here */}
        {/* if there is a problem having it show, change z index (depth from user) */}
      </div>
      <TopNav />
    </header>
  );
}

const mapStateToProps = state => {
  return {
    menuOpen: state.menu.menuOpen
  };
};

export default connect(mapStateToProps)(Header);