import React from 'react';
import {Redirect} from 'react-router-dom';
import {reduxForm, Field, SubmissionError, focus, reset} from 'redux-form';
import {connect} from 'react-redux';

import './article-form.css'
import {postArticle} from '../actions'

import ArticleInput from './article-input';

export class ArticleForm extends React.Component {
  
  onSubmit(article) {
    this.props.dispatch(postArticle(article))
    // .then(() => alert('Lesson Learned!'))
    .then(() => {
      this.props.dispatch(reset('article-form'))
      console.log('made it')
    })
  }
  
  render(){

    if(!this.props.loggedIn){
      return <Redirect to='/' />
    }

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
      <div className='row'>
        <div className='col-8 offset-2'>
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

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
})

ArticleForm = connect(mapStateToProps)(ArticleForm)

export default reduxForm({
  form: 'article-form',
  onSubmitFail: (errors, dispatch) =>
      dispatch(focus('article-form', Object.keys(errors)[0]))
})(ArticleForm);