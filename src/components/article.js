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
        <section>
          <span>{this.props.dateCreated}</span>
          <span>{this.props.tags}</span>
        </section>
      </article>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
 return { 
   title: state.articles.data.title,
   content: state.articles.data.content,
   dateCreate: state.articles.data.dateCreated,
   tags: state.articles.data.tags,
   loggedIn: state.auth.currentUser !== null
 } 
}

export default connect(mapStateToProps)(Article)