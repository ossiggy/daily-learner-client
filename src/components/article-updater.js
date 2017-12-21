import React from 'react';
import {reduxForm, Field, SubmissionError, focus, reset} from 'redux-form';
import {connect} from 'react-redux';

import ArticleInput from './article-input';
import {fetchArticle, updateArticle, load as loadArticle} from '../actions';

import './article-updater.css'

export class ArticleUpdater extends React.Component{

  componentDidMount(){
    this.props.dispatch(fetchArticle(this.props.match.params.id))
  }

  onSubmit(article) {
    this.props.dispatch(updateArticle(article))
    .then(() => alert('Lesson Learned!'))
    .then(() => this.props.dispatch(reset('article')))
  }

  render(){
    if(this.props.initialValues){
    console.log(this.props.initialValues)
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
            className="article-updater"
            onSubmit={this.props.handleSubmit(article => this.onSubmit(article))}>
            {successMessage}
            {errorMessage}
            <div className="input-fields">
            <label htmlFor="title">Title</label>
              <Field
                id="title"
                name="title"
                type="text"
                component="input"
                value="this"
                label="Title"
              />
            <label htmlFor="content">Body</label>
              <Field 
              id="content"
              name="content"
              element="textarea"
              component="textarea"
              label="Content"
              />
            <label htmlFor="category">Category</label>
              <Field 
              id="category"
              name="category"
              type="text"
              component="input"
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

ArticleUpdater = reduxForm({
  form: 'ArticleUpdater',
  onSubmitFail: (errors, dispatch) =>
  dispatch(focus('ArticleUpdater', Object.keys(errors)[0]))
})(ArticleUpdater);

const mapStateToProps = state => {
  return{
  initialValues: state.singleArticle.data
  }
}
export default ArticleUpdater = connect(mapStateToProps)(ArticleUpdater);


