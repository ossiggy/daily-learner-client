import React, { Component } from 'react';
import {connect} from 'react-redux';
import Article from '../components/article';
import {fetchAllArticles} from '../actions/';

export class ArticleViewer extends Component {

  componentDidMount(){
    this.props.dispatch(fetchAllArticles())
  }

  render() {
    let articles;
    if(this.props.articles){
      articles = this.props.articles.map((article, i) => {
      return <Article key={i} {...this.props.articles[i]} />
    });
  }

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
  console.log(state)
  return {
    articles: state.articles.data,
    loggedIn: true
  }
}

export default connect(mapStateToProps)(ArticleViewer)
