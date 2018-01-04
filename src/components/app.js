import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import Dashboard from './dashboard';
import Header from './header';
import ArticleViewer from './article-viewer';
import Article from './article';
import ArticleForm from './article-form';
import ArticleUpdater from './article-updater';
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
        <Header />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={RegistrationPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path='/articleform' component={ArticleUpdater} />
        <Route exact path="/articles" component={ArticleViewer} />
        <Route exact path="/articles/:id" component={Article} />
        <Route exact path="/update/:id" component={ArticleUpdater} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null,
  authToken: state.auth.authToken
});

export default withRouter(connect(mapStateToProps)(App));