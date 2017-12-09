import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import ArticleForm from './article-form';
import {fetchAllArticles} from '../actions/';

export function Dashboard(props) {
  if(!props.loggedIn){
    return <Redirect to='/' />
  }

 return (
    <div className="dashboard">
      <ArticleForm />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser !== null
  }
}

export default connect(mapStateToProps)(Dashboard)