import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import LoginForm from './login-form';
import './landing-page.css';

export function LandingPage(props){ //first page you see, decide whether you want to redirect or update DOM
  let registerSection;
  let loginForm;
  if(!props.loggedIn){
    registerSection = <Link to='/register'>Sign Up And Start Tracking</Link>;
    loginForm = <LoginForm />;
  }
  
  return (
    <section className="info-section">
      <p className="site-info">
        The expression goes, you learn something new every day. Imagine how much you could
        benefit from having a collection of all that information on tap and ready to be accessed?
        Enter: Daily Learner.  This app was designed specifically to keep track of your hard earned
        life lessons and organize them in an easily searchable database.  Just write down your lesson,
        add a category to categorize your lessons, and viola! This is an excellent practice
        that can be utilized in a variety of different ways. You can track your learning patterns and
        even write your own best seller on all that you've learned.
      </p>
      {registerSection}
      {loginForm}
    </section>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);