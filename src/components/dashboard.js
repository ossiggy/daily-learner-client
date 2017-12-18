import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import ArticleForm from './article-form';
import {fetchAllArticles} from '../actions/';

export function Dashboard(props) {
  if(!props.loggedIn){
    return <Redirect to='/' />
  }

 return (
    <div className="dashboard">
      <h1>Where should we begin?</h1>
      <Link to='/articleform'>
        <button type='submit'>New Lesson</button>
      </Link>
      <Link to='/articles'>
        <button type='submit'>Previous Lessons</button>
      </Link>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser !== null
  }
}

export default connect(mapStateToProps)(Dashboard)