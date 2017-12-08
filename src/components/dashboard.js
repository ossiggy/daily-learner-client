import React, { Component } from 'react';
import {connect} from 'react-redux';
import Article from '../components/article';
import {fetchAllArticles} from '../actions/';

export class Dashboard extends Component {

  // component

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
      <div className="dashboard">
        <div className="articles">
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

export default connect(mapStateToProps)(Dashboard)
