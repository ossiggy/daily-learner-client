import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Article from '../components/article';
import {fetchAllArticles, deleteArticle} from '../actions/';

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
  
    if(this.props.articles){
      if(!Object.keys(this.props.articles)){
        articles = "Write down today's lesson to start tracking your daily learning!"
      }
      if(Object.keys(this.props.articles)){
        articles = this.props.articles.map((article, i) => {
        return <div className="article-link">
                <Link to={`/articles/${article.id}`}>{article.title}</Link>
                {/* add article updater */}
                <button onClick={()=>this.props.dispatch(deleteArticle(article.id))}>Delete</button>
              </div>
        })
      }
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
