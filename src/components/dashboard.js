import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';

import {fetchAllArticles} from '../actions'

import './dashboard.css'

export class Dashboard extends React.Component {
componentDidMount(){
  this.props.dispatch(fetchAllArticles())
}

render(){
  if(!this.props.loggedIn){
    return <Redirect to='/' />
  }
  let school = 0;
  let personal = 0;
  let work = 0;
  let social = 0;
  let spiritual = 0;
  if(this.props.articles){
    this.props.articles.forEach(article => {
      if(article.category==='school'){
        school++
      }
      if(article.category==='personal'){
        personal++
      }
      if(article.category==='work'){
        work++
      }
      if(article.category==='social'){
        social++
      }
      if(article.category==='spiritual'){
        spiritual++
      }
    })
  }
  return (
      <div className="dashboard col-6 offset-3">
        <h1>Where should we begin?</h1>
        <Link to='/articleform'>
          <button type='submit'>New Lesson</button>
        </Link>
        <Link to='/articles'>
          <button type='submit'>Previous Lessons</button>
        </Link>
        <ul className='stats col-6 offset-3'>Breakdown of lessons so far
            <li className='school'>School: {school}</li>
            <li className='work'>Work: {work}</li>
            <li className='spiritual'>Spiritual: {spiritual}</li>
            <li className='social'>Social: {social}</li>
            <li className='personal'>Personal: {personal}</li>
          </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser !== null,
    articles: state.articles.data
  }
}

export default connect(mapStateToProps)(Dashboard)