import React, {Component} from 'react';
import {reduxForm, Field, SubmissionError, focus, reset} from 'redux-form';
import {connect} from 'react-redux';

import './article-form.css'
import {postArticle} from '../actions'

import ArticleInput from './article-input';

export class ArticleForm extends Component {
  
  onSubmit(article) {
    this.props.dispatch(postArticle(article))
    .then(() => alert('Lesson Learned!'))
    .then(() => this.props.dispatch(reset('article')))
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
      <div class='row'>
        <div class='col-6 offset-3'>
          <form
            className="article-form"
            onSubmit={this.props.handleSubmit(article => this.onSubmit(article))}>
            {successMessage}
            {errorMessage}
            <div className="input-fields">

              <Field
                name="title"
                type="text"
                component={ArticleInput}
                value="this"
                label="Title"
              />
              <Field 
              name="content"
              element="textarea"
              component={ArticleInput}
              label="Content"
              />
              <Field 
              name="category"
              type="text"
              component={ArticleInput}
              label="Category"
              //create array of category when form is submitted
              //make its own component? action?
              />
              <button
                type="submit"
                disabled={this.props.pristine || this.props.submitting}>
                  Submit
              </button>
            </div>
          </form>
      </div>
    </div>
    )
  }
}

export default reduxForm({
  form: 'article',
  onSubmitFail: (errors, dispatch) =>
      dispatch(focus('article', Object.keys(errors)[0]))
})(ArticleForm);