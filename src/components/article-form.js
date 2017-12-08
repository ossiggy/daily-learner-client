import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import {connect} from 'react-redux';

import {postArticle} from '../actions'

import ArticleInput from './article-input';

export class ArticleForm extends React.Component {
  onSubmit(article) {
    this.props.dispatch(postArticle(article))
  }
  render(){
    let successMessage;
    if(this.props.submitSucceeded) {
      successMessage =(
        <div className="lesson-learned-alert">
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
        onSubmit={this.props.handleSubmit(article => 
          this.onSubmit(article)
        )}>
        {successMessage}
        {errorMessage}
        <Field
          name="title"
          type="text"
          component={articleInput}
          label="Name"
        />
        <Field 
        name="content"
        type="text"
        component={articleInput}
        label="Name"
        />
        <Field 
        name="tags"
        //make its own component? action?
        //create array of tags when form is submitted
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