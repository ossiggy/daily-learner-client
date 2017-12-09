import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

export function TopNav(props) {
  if(props.loggedIn){
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
  return (
    <nav>
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