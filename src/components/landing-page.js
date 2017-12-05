import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import LoginForm from './login-form';

export default function LandingPage(props){ //first page you see, decide whether you want to redirect or update DOM
  if(props.loggedIn){
    return <Redirect to="/dashboard" />
  }
  
  return (
    <div className="home">
      <h1 className="main-title">Daily Learner</h1>
      <h2 className="subtitle">Tracking life lessons one day at a time</h2>
      <p className="site-info">
        The expression goes, you learn something new every day. Imagine how much you could
        benefit from having a collection of all that information on tap and ready to be accessed?
        Enter: Daily Learner.  This app was designed specifically to keep track of your hard earned
        life lessons and organize them in an easily searchable database.  Just write down your lesson,
        add a few custom tags to categorize your lessons, and viola! This is an excellent practice
        that can be utilized in a variety of different ways. You can track your learning patterns and
        even write your own best seller on all that you've learned.
      </p>
      <LoginForm />
      <Link to='/register'>Sign Up</Link>
    </div>
  )
}