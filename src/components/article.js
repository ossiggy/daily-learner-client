import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchArticle} from '../actions';
import './article.css'

export class Article extends React.Component{

  componentDidMount(){
    this.props.dispatch(fetchArticle(this.props.match.params.id))
  }

  render(){
    if(!this.props.loggedIn){
      return <Redirect to='/' />
    }
  
    return (
      <article className="col-6 offset-4">
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
        <div>Category: {this.props.category}</div>
        <span>{this.props.dateCreated}</span>
      </article>
    )
  }
}

const mapStateToProps = state => {
 return { 
   title: state.singleArticle.data.title,
   content: state.singleArticle.data.content,
   dateCreated: state.singleArticle.data.dateCreated,
   category: state.singleArticle.data.category,
   loggedIn: state.auth.currentUser !== null
 } 
}

export default connect(mapStateToProps)(Article)