import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Article from '../components/article';
import {fetchAllArticles} from '../actions/';

export class ArticleViewer extends Component {

  componentDidMount(){
    this.props.dispatch(fetchAllArticles())
  }
  
  render() {
    if(!this.props.loggedIn){
      return <Redirect to='/' />
    }
    let articles = 'no articles here';
    if(this.props.loading){
      articles = <h2>loading</h2>
    }
  
    if(Object.keys(this.props.articles).length > 0){
      articles = this.props.articles.map((article, i) => {
      return <Link to={`/articles/${article.id}`}>{article.title}</Link>
      })
      console.log(this.props)
    };

    return (
      <div className="article-viewer">
        <div className="">
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
  }
}

export default connect(mapStateToProps)(ArticleViewer)
