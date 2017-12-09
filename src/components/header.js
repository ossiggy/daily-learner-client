import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUser, setAuthToken} from '../actions';
import {clearAuthToken} from '../local-storage';
import TopNav from './top-nav';

export class Header extends React.Component {

  logOut() {
    this.props.dispatch(setCurrentUser(null));
    this.props.dispatch(setAuthToken(null));
    clearAuthToken();
}

  render(){
    let logOutButton;
    if (this.props.loggedIn) {
        logOutButton = (
            <button onClick={() => this.logOut()}>Log out</button>
        );
    }

    return (
      <header className="header">
        <h1 className="main-title">Daily Learner</h1>
        <h2 className="subtitle">Tracking life lessons one day at a time</h2>
        <TopNav />
        {logOutButton}
      </header>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser !== null
  };
}

export default connect(mapStateToProps)(Header);