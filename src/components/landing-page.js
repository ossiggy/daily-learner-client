import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import LoginForm from './login-form';
import './landing-page.css';

export function LandingPage(props){ //first page you see, decide whether you want to redirect or update DOM
  let registerSection;
  let loginForm;
  let dashboard;

  if(!props.loggedIn){
    registerSection = <Link to='/register'>Sign Up And Start Tracking</Link>;
    loginForm = <LoginForm />;
  }
  
  if(props.loggedIn){
    dashboard = <Link to='/dashboard'>Take me to my dashboard!</Link>;
  }

  return (
    <div className="landing-page col-12">
      <section className="info-section-1 col-12">
        <p className="site-info-1">
          The expression goes, "you learn something new every day". Imagine how much you could
          benefit from having a collection of all that information on tap and ready to be accessed?
        </p>
        <img alt="brain-scan" src="https://tctechcrunch2011.files.wordpress.com/2015/02/shutterstock_175625024.jpg"></img>
      </section>
      <section className="info-section-2 col-12">
        <p className="site-info-2">Enter: Daily Learner.  This app was designed specifically to keep track of your hard earned
          life lessons and organize them in an easily searchable database.  Just write down your lesson,
          add an applicable category, and viola! You can now track all the knowledge you gain on a daily basis.
        </p>
        <img alt="journal" src="https://openclipart.org/image/2400px/svg_to_png/289453/Notepad.png"></img>
      </section>
      <div className="register-login col-6 offset-3">
        {dashboard}
        {registerSection}
        {loginForm}
      </div>
      <section className="author col-12">Built by Michael Ossig (GitHub: ossiggy)</section>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);