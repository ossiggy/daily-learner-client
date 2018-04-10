import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchArticle} from '../actions';
import './article.css';

export class Article extends React.Component{

  componentDidMount(){
    this.props.dispatch(fetchArticle(this.props.match.params.id));
  }

  render(){
    if(!this.props.loggedIn){
      return <Redirect to='/' />;
    }
  
    return (
      <article className="col-6 offset-3">
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
        <div>
          <span>Category: {this.props.category}</span><br></br>
          <span>{this.props.dateCreated}</span>
        </div>
        <Link to='/dashboard'>
          <button className="go-back" type='submit'>Go Back</button>
        </Link>
      </article>
    );
  }
}

const mapStateToProps = state => {
  return { 
    title: state.singleArticle.data.title,
    content: state.singleArticle.data.content,
    dateCreated: state.singleArticle.data.dateCreated,
    category: state.singleArticle.data.category,
    loggedIn: state.auth.currentUser !== null
  }; 
};


export default connect(mapStateToProps)(Article);