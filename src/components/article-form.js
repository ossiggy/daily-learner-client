import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import {reduxForm, Field, focus, formValueSelector} from 'redux-form';
import {connect} from 'react-redux';

import './article-form.css';
import {postArticle} from '../actions';

export class ArticleForm extends React.Component {
  
  onSubmit(article) {
    this.props.dispatch(postArticle(article))
  }
  
  render(){
    if(!this.props.loggedIn){
      return <Redirect to='/' />;
    }

    let successMessage;

    if(this.props.submitSucceeded) {
      return <Redirect to='/articles' />
    }

    let errorMessage;

    if(this.props.error){
      errorMessage =(
        <div className="lesson-learned-error">
          {this.props.error}
        </div>
      );
    }

    return (
      <div className='row'>
        <div className='col-8 offset-2'>
          <h1 className="new-lesson-title col-12">New Lesson!</h1>
          <form
            className="article-form"
            onSubmit={this.props.handleSubmit(article => this.onSubmit(article))}>
            {successMessage}
            {errorMessage}
            <div className="input-fields">
              <label htmlFor="title">Title</label>
              <Field
                name="title"
                type="text"
                component="input"
                value="this"
                label="Title"
              />
              <label htmlFor="content">Body</label>
              <Field 
                name="content"
                element="textarea"
                component="textarea"
                label="Content"
              />
              <label htmlFor="category">Category</label>
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
                <option value="fitness">Fitness</option>
              </Field>
              <div className="form-button-container col-12">
                <button
                  type="submit"
                  disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
                <Link to='/dashboard'>
                  <button className="go-back-form" type='submit'>Back</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const afterSubmit = () => {
  return <Redirect to='/articles' />
};

ArticleForm = reduxForm({
  form: 'ArticleForm',
  onSubmitSuccess: afterSubmit,
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('ArticleForm', Object.keys(errors)[0]))
})(ArticleForm);

const selector = formValueSelector('ArticleForm');

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  category: selector(state, 'category'),
  initialValues: {'category': 'work'}
});

export default connect(mapStateToProps)(ArticleForm);
