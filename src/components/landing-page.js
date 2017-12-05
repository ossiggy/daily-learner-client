import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

export default function LandingPage(props){ //first page you see, decide whether you want to redirect or update DOM
  if(props.loggedIn){
    return <Redirect to="/articles" />
  }
  
  return (
    <div className="user">
      <h1>{props.userName}</h1>
    </div>
  )
}