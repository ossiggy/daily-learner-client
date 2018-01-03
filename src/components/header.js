import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions';
import {clearAuthToken} from '../local-storage';
import './header.css';
import TopNav from './top-nav';

export class Header extends React.Component {

  logOut() {
    console.log('top of file')
    this.props.dispatch(logout());
    clearAuthToken();
    console.log(this.props.state);
}

  render(){
    let logOutButton;
    if (this.props.loggedIn) {
        logOutButton = (
            <button className="col-1" onClick={() => this.logOut()}>Log out</button>
        );
    }

    return (
      <header className="header">
        <h1 className="main-title col-12">Daily Learner</h1>
        <h2 className="subtitle col-12">Tracking life lessons one day at a time</h2>
          <TopNav />
          {logOutButton}
      </header>
    )
  }
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