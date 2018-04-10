import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchAllArticles, deleteArticle} from '../actions/';
import './article-viewer.css';

const FontAwesome = require('react-fontawesome');

export class ArticleViewer extends Component {

  componentDidMount(){
    this.props.dispatch(fetchAllArticles());
  }
  
  render() {
    if(!this.props.loggedIn){
      return <Redirect to='/' />;
    }
    let articles;
    let goBack;

    if(this.props.articles){
      goBack = (
        <Link to='/dashboard'>
          <button className="go-back" type='submit'>Go Back</button>
        </Link>
      )
      if(!Object.keys(this.props.articles)){
        articles = 'Write down today\'s lesson to start tracking your daily learning!';
      }
      if(Object.keys(this.props.articles)){
        articles = this.props.articles.map((article, i) => {
          return <div key = {i} className="article-link col-12">
            <div className="col-8">
              <Link to={`/articles/${article.id}`}>
                <button className='article-title' type='submit'>{article.title} ({article.category})</button>
              </Link>
            </div>
            <div className="col-4">
              <Link to={`/update/${article.id}`}>
                <FontAwesome name="pencil" size="2x" className="update"/>
              </Link>
              <FontAwesome name="trash-o" size="2x" className="update trash" onClick={()=>this.props.dispatch(deleteArticle(article.id))} />
            </div>
          </div>;
        });
      }
    }

    return (
      <div className="article-viewer">
        <h2 className="col-6 offset-3">Previous Lessons</h2>
        <div className="col-6 offset-3 article-div">
          {articles}
          {goBack}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    articles: state.articles.data,
    loggedIn: state.auth.currentUser !== null,
  };
};

export default connect(mapStateToProps)(ArticleViewer);
