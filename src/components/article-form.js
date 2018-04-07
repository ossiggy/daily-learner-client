import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import {reduxForm, Field, focus, reset, formValueSelector} from 'redux-form';
import {connect} from 'react-redux';

import './article-form.css';
import {postArticle} from '../actions';

export class ArticleForm extends React.Component {
  
  onSubmit(article) {
    this.props.dispatch(postArticle(article))
      .then(() => alert('Submitted!'));
  }
  
  render(){
    if(!this.props.loggedIn){
      return <Redirect to='/' />;
    }

    let successMessage;

    if(this.props.submitSucceeded) {
      this.props.dispatch(alert('Submitted!'));
    }

    let errorMessage;

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
              </Field>
              <button
                type="submit"
                disabled={this.props.pristine || this.props.submitting}>
                  Submit
              </button>
              <Link to='/dashboard'>
                <button className="go-back-form" type='submit'>Go Back</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const afterSubmit = (results, dispatch) => {
  dispatch(reset('ArticleForm'));
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
