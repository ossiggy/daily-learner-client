import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchAllArticles, deleteArticle} from '../actions/';
import './article-viewer.css';

export class ArticleViewer extends Component {

  componentDidMount(){
    this.props.dispatch(fetchAllArticles());
  }
  
  render() {
    if(!this.props.loggedIn){
      return <Redirect to='/' />;
    }
    let articles = 'no articles here';
    if(this.props.loading){
      articles = <h2>loading</h2>;
    }
  
    if(this.props.articles){
      if(!Object.keys(this.props.articles)){
        articles = 'Write down today\'s lesson to start tracking your daily learning!';
      }
      if(Object.keys(this.props.articles)){
        articles = this.props.articles.map((article, i) => {
          return <div key = {i} className="article-link">
            <Link to={`/articles/${article.id}`}>
              <button className='article-title col-3' type='submit'>{article.title} ({article.category})</button>
            </Link>
            <Link to={`/update/${article.id}`}>
              <button className='update' type='submit'>Update</button>
            </Link>
            <button className='delete' onClick={()=>this.props.dispatch(deleteArticle(article.id))}>Delete</button>
          </div>;
        });
      }
    }

    return (
      <div className="article-viewer">
        <h2 className="col-6 offset-3">Previous Lessons</h2>
        <div className="col-6 offset-3 article-div">
          {articles}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    articles: state.articles.data,
    loggedIn: state.auth.currentUser !== null,
    loading: state.articles.loading
  };
};

export default connect(mapStateToProps)(ArticleViewer);
