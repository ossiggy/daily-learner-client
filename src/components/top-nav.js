import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {logout} from '../actions';
import LoginForm from './login-form';
import './header.css';

export function TopNav(props) {
  if(props.loggedIn){
    return (
      <nav className='nav col-12'>
        <NavLink exact to="/dashboard" activeClassName="active" className="col-3 navLink">
          Home
        </NavLink>
        <NavLink exact to="/articleform" activeClassName="active" className="col-3 navLink">
          New Lesson
        </NavLink>
        <NavLink to="/articles/" activeClassName="active" className="col-3 navLink">
          Previous Lessons
        </NavLink>
        <NavLink to="/" activeClassName="active" className="col-3 navLink">
          About
        </NavLink>
        <button className="logout-button col-1" onClick={()=>props.dispatch(logout())}>Log out</button>
      </nav> 
    );
  }
  return (
    <nav className='register-container nav'>
      <LoginForm />
    </nav>
  );
}

const mapStateToProps = state => ({
  loggedIn:state.auth.currentUser !== null,
  currentUser:state.auth.currentUser
});

export default connect(mapStateToProps)(TopNav);