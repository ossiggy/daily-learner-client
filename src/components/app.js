import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './dashboard';
import Header from './header';
import ArticleForm from './article-form';
import ArticleViewer from './article-viewer';
import Article from './article';
import ArticleUpdater from './article-updater';
import LandingPage from './landing-page';
import RegistrationPage from './registration-page';
import {refreshAuthToken} from '../actions/auth';

// review form validations for creating and checking password
// disable zoom on mobile browser utilizing "viewport" meta tag along with "max zoom"

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
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggablePercent = {80}
        pauseOnHover
      />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={RegistrationPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path='/articleform' component={ArticleForm} />
        <Route exact path="/articles" component={ArticleViewer} />
        <Route exact path="/articles/:id" component={Article} />
        <Route exact path="/update/:id" component={ArticleUpdater} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null,
  authToken: state.auth.authToken
});

export default withRouter(connect(mapStateToProps)(App));