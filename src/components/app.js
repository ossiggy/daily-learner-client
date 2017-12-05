import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import Dashboard from './dashboard';
import Article from './article';
import LandingPage from './landing-page';
import RegistrationPage from './registration-page';
import {refreshAuthToken} from '../actions/auth';

export class App extends React.Component {
  componentDidMount() {
    if(this.props.hasAuthToken) {
      this.props.dispatch(refreshAuthToken());
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.loggedIn && !this.props.loggedIn){
      this.startPeriodicRefresh();
    }
    if(!nextProps.loggedIn && this.props.loggedIn){
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount(){
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh(){
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60*60*1000
    );
  }

  stopPeriodicRefresh() {
    if(!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render(){
    return (
      <div className="app">
        {/* Header will go here */}
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={RegistrationPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/articles" component={Article} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));