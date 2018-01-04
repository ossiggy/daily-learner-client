import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {logout} from '../actions'

export function TopNav(props) {
  if(props.loggedIn){
    return (
      <nav className='nav'>
        <NavLink exact to="/dashboard" activeClassName="active" className="col-3">
          Home
        </NavLink>
        <NavLink exact to="/articleform" activeClassName="active" className="col-3">
          New Lesson
        </NavLink>
        <NavLink to="/articles/" activeClassName="active" className="col-3">
          Previous Lessons
        </NavLink>
        <NavLink to="/" activeClassName="active" className="col-3">
          About
        </NavLink>
        <div className="username col-3">{props.currentUser.username}</div>
        <button className="logout-button col-1" onClick={()=>props.dispatch(logout())}>Log out</button>
      </nav> 
    )
  }
  return (
    <nav className='nav'>
    </nav>
  )
}

const mapStateToProps = state => ({
    loggedIn:state.auth.currentUser !== null,
    currentUser:state.auth.currentUser
})

export default connect(mapStateToProps)(TopNav)