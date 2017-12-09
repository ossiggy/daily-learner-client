import React from 'react';
import {connect} from 'react-redux';

import {fetchArticle} from '../actions';

export class Article extends React.Component{

  componentDidMount(){
    this.props.dispatch(fetchArticle(this.props.match.params.id))
  }

  render(){
    console.log(this.props)
    return (
      <article>
        <h1>{this.props.title}</h1>
        {/* <p>{props.content}</p>
        <section>
          <span>{props.dateCreated}</span>
          <span>{props.tag}</span>
        </section> */}
      </article>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
 return { 
   title: state.articles.data.title
 } 
}

export default connect(mapStateToProps)(Article)