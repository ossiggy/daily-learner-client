import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './components/article';

class Dashboard extends Component {

  render() {
    const articles = this.props.articles.map((article, i) => {
      return <Article key={i} {...this.props.articles[i]} />
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {articles}
        </p>
      </div>
    );
  }
}

export default Dashboard;
