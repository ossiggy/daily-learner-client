import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {menuToggle, logout} from '../actions';
import './header.css';
import TopNav from './top-nav';
import LoginForm from './login-form';

const FontAwesome = require('react-fontawesome');

// give all header elements size options (small medium large)

export function Header(props) {

  let dropDownMenu;

  if(props.menuOpen && props.loggedIn){
    dropDownMenu = (
      <div className='dropdown-menu col-3' onMouseLeave={()=> props.dispatch(menuToggle())}>
        <div className='menu-option to-home'>
          <NavLink exact to="/dashboard" className="link" activeClassName="active" onClick={() => props.dispatch(menuToggle())} >
            Home
          </NavLink>
        </div>
        <div className='menu-option to-new'>
          <NavLink exact to="/articleform" className="link" activeClassName="active" onClick={() => props.dispatch(menuToggle())} >
            New Lesson
          </NavLink>
        </div>
        <div className='menu-option to-previous'>
          <NavLink to="/articles/" className="link" activeClassName="active" onClick={() => props.dispatch(menuToggle())} >
            Previous Lessons
          </NavLink>
        </div>
        <div className='menu-option to-about'>
          <NavLink to="/" className="link" activeClassName="active" onClick={() => props.dispatch(menuToggle())} >
            About
          </NavLink>
        </div>
        <div className='menu-option to-log-out'>
          <button onClick={() => {
            props.dispatch(logout())
            props.dispatch(menuToggle())
            }}>Log Out</button>
        </div>
      </div>
    );
  }

  if(props.menuOpen && !props.loggedIn){
    dropDownMenu = (
    <div className="dropdown-menu col-3">
      <div className="menu-option">
        <LoginForm />
      </div>
    </div>
    )
  }

  return (
    <header className="header">
      <div className="head-box col-12">
      <NavLink exact to="/dashboard" activeClassName="active">
        <h1 className="main-title">Daily Learner</h1>
      </NavLink>
        <h2 className="subtitle">Tracking life lessons one day at a time</h2>
        {dropDownMenu}
        <FontAwesome name='bars' 
        size="3x" 
        className="menu-button" 
        onClick={()=> props.dispatch(menuToggle())}/>
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
    menuOpen: state.menu.menuOpen,
    loggedIn: state.auth.currentUser !== null
  };
};

export default connect(mapStateToProps)(Header);