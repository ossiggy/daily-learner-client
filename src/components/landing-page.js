import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {login} from '../actions';
import './landing-page.css';

export function LandingPage(props){
  let dashboard;
  let demoMode;
  
  if(props.loggedIn){
    dashboard = <Link to='/dashboard'>Take me to my dashboard!</Link>;
  }

  if(!props.loggedIn){
    demoMode = (
    <div className="demo-mode-container">
      <button className='demo-mode' onClick={() => props.dispatch(login("demomode", "password"))} >Demo</button>
    </div>
    );
  }

  return (
    <div className="landing-page col-12">
      <section className="about-title pill col-12">
        <h1>About this site</h1>
      </section>
      {demoMode}
      <section className="pill col-12">
        <div className="site-info-container col-6">
          <p className="site-info top col-12">
          The expression goes, "you learn something new every day". Imagine how much you could
          benefit from having a collection of all that information on tap and ready to be accessed?
          </p>
        </div>
        <div className="brain-scan-container col-6">
          <img alt="brain-scan" className="brain-scan" src="https://tctechcrunch2011.files.wordpress.com/2015/02/shutterstock_175625024.jpg"></img>
        </div>
      </section>
      <section className="pill col-12">
        <div className="brain-scan-container col-6">
          <img alt="journal" className="journal" src="https://openclipart.org/image/2400px/svg_to_png/289453/Notepad.png"></img>
        </div>
        <div className="site-info-container col-6">
          <p className="site-info bottom col-12">Enter: Daily Learner.  This app was designed specifically to keep track of your hard earned
            life lessons and organize them in an easily searchable database.  Just write down your lesson,
            add an applicable category, and voila! You can now track all the knowledge you gain on a daily basis.
          </p>
        </div>
      </section>
      <div className="register-login col-6 offset-3">
        {dashboard}
      </div>
      <section className="author col-12">Built by Michael Ossig (GitHub: ossiggy)</section>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);