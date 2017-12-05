import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import Dashboard from './dashboard';
import Article from './article';
import LandingPage from './landing-page';
import {refreshAuthToken} from '../actions/auth';

export class App extends React.Component {
  componentDidMount() {
    if(this.props.hasAuthToken) {
      this.props.dispatch(refreshAuthToken());
    }
  }
}