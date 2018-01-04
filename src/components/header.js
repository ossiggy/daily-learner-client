import React from 'react';
import {connect} from 'react-redux';
import './header.css';
import TopNav from './top-nav';

export function Header(props) {
  return (
    <header className="header">
      <div className="head-box">
        <h1 className="main-title">Daily Learner</h1>
        <h2 className="subtitle">Tracking life lessons one day at a time</h2>
      </div>
      <TopNav />
    </header>
  )
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser !== null,
    authToken: state.auth.authToken,
    currentUser: state.auth.currentUser,
    state: state
  };
}

export default connect(mapStateToProps)(Header);