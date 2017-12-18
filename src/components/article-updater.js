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

const mapStateToProps = state => {
  console.log(state.singleArticle.data)
  return{
  initialData: state.singleArticle.data
  }
}

ArticleUpdater = connect(mapStateToProps, {load: loadArticle})(ArticleUpdater);

export default reduxForm({
  form: 'article-updater',
  onSubmitFail: (errors, dispatch) =>
      dispatch(focus('article-updater', Object.keys(errors)[0]))
})(ArticleUpdater);

