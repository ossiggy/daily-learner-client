import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

export function TopNav(props) {
  if(props.loggedIn){
    return (
      <nav className='nav'>
        <NavLink exact to="/dashboard" activeClassName="active" className="col-1">
          Home
        </NavLink>
        <NavLink exact to="/articleform" activeClassName="active" className="col-2">
          New Lesson
        </NavLink>
        <NavLink to="/articles/" activeClassName="active" className="col-2">
          Previous Lessons
        </NavLink>
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