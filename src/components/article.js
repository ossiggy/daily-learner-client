import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchArticle} from '../actions';

export class Article extends React.Component{

  componentDidMount(){
    this.props.dispatch(fetchArticle(this.props.match.params.id))
  }

  render(){
    if(!this.props.loggedIn){
      return <Redirect to='/' />
    }
  
    return (
      <article>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
        <div>{this.props.tags}</div>
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
   tags: state.singleArticle.data.tags,
   loggedIn: state.auth.currentUser !== null
 } 
}

export default connect(mapStateToProps)(Article)