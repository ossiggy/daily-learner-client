import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './components/article';

class Dashboard extends Component {
  constructor(props){
    super(props);


  }

  render() {
    const articles = this.props.posts.map((article, i) => {
      return <Article key={i} {...this.props.posts[i]} />
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
