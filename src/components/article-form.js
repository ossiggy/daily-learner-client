import React from 'react';
import {Redirect} from 'react-router-dom';
import {reduxForm, Field, focus, reset, formValueSelector} from 'redux-form';
import {connect} from 'react-redux';

import './article-form.css'
import {postArticle} from '../actions'

import ArticleInput from './article-input';

export class ArticleForm extends React.Component {
  
  onSubmit(article) {
    this.props.dispatch(postArticle(article))
    // .then(() => alert('Lesson Learned!'))
    // .then(() => {
    //   this.props.dispatch(reset('article-form'))
    //   console.log('made it')
    // })
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
              component="select"
              label="Category">
              <option value="work">Work</option>
              <option value="school">School</option>
              <option value="social">Social</option>
              <option value="personal">Personal</option>
              <option value="spiritual">Spiritual</option>
              </Field>
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

const selector = formValueSelector('article-form')

ArticleForm = reduxForm({
  form: 'article-form',
  onSubmitFail: (errors, dispatch) =>
      dispatch(focus('article-form', Object.keys(errors)[0]))
})(ArticleForm);

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  category: selector(state, 'category')
})

export default ArticleForm = connect(mapStateToProps)(ArticleForm)
