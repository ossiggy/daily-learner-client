import React, {Component} from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import {connect} from 'react-redux';

import './article-form.css'
import {postArticle} from '../actions'

import ArticleInput from './article-input';

export class ArticleForm extends Component {
  
  onSubmit(article) {
    this.props.dispatch(postArticle(article))
  }
  
  render(){
    let successMessage;

    if(this.props.submitSucceeded) {
      successMessage =(
        <div className="lesson-learned-success">
          Lesson Learned!
        </div>
      )
    }

    let errorMessage;
    if(this.props.error){
      errorMessage =(
        <div className="lesson-learned-error">
          {this.props.error}
        </div>
      )
    }

    return (
      <form
        className="article-form"
        onSubmit={this.props.handleSubmit(article => this.onSubmit(article))}>
        {successMessage}
        {errorMessage}
        <Field
          name="title"
          type="text"
          component={ArticleInput}
          label="Title"
        />
        <Field 
        name="content"
        element="textarea"
        component={ArticleInput}
        label="Content"
        />
        <Field 
        name="tags"
        type="text"
        component={ArticleInput}
        label="Tag"
        //create array of tags when form is submitted
        //make its own component? action?
        />
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}>
            Submit
        </button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'article',
  onSubmitFail: (errors, dispatch) =>
      dispatch(focus('article', Object.keys(errors)[0]))
})(ArticleForm);