import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {logout} from '../actions'

export function TopNav(props) {
  let logOutButton
  if(props.loggedIn){
    return (
      <nav className='nav'>
        <NavLink exact to="/dashboard" activeClassName="active" className="col-1">
          Home
        </NavLink>
        <NavLink exact to="/articleform" activeClassName="active" className="col-2">
          New Lesson
        </NavLink>
        <NavLink to="/articles/" activeClassName="active" className="col-3">
          Previous Lessons
        </NavLink>
        <button className="logout-button col-1" onClick={()=>props.dispatch(logout())}>Log out</button>
      </nav> 
    )
  }
  return (
    <nav className='nav'>
      <NavLink exact to="/dashboard" activeClassName="active">
        Home
      </NavLink>
    </nav>
  )
}

const mapStateToProps = state => {
  return {
    loggedIn:state.auth.currentUser !== null
  }
}

export default connect(mapStateToProps)(TopNav)