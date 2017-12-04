import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from '../logo.svg';
import '../App.css';
import Article from '../components/article';
import {fetchAllArticles} from '../actions/';
import {refreshAuthToken} from '../actions/auth';

export class Dashboard extends Component {

  // component

  componentMount(){
    this.props.dispatch(fetchAllArticles())
  }

  render() {
    let articles;
    console.log(this.props.articles)
    if(this.props.articles){
      articles = this.props.articles.map((article, i) => {
      return <Article key={i} {...this.props.articles[i]} />
    });
    console.log(articles)
  }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
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
