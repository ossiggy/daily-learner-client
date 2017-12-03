import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

export default function LandingPage(props){
  return (
    <div className="user">
      <h1>{props.userName}</h1>
    </div>
  )
}