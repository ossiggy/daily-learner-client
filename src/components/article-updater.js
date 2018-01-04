import React from 'react';
import {Redirect} from 'react-router-dom';
import {reduxForm, Field, focus, formValueSelector} from 'redux-form';
import {connect} from 'react-redux';

import {fetchArticle, updateArticle, reset as formReset} from '../actions';

import './article-updater.css'

export class ArticleUpdater extends React.Component{

  componentDidMount(){
    if(this.props.match.params.id){
      this.props.dispatch(fetchArticle(this.props.match.params.id))
    }
  }

  componentWillUnmount(){
    this.props.dispatch(formReset())
  }

  onSubmit(article) {
    this.props.dispatch(updateArticle(article))
    .then(() => <Redirect to='/articles' />)
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

ArticleUpdater = reduxForm({
  form: 'ArticleUpdater',
  enableReinitialize: true,
  onSubmitFail: (errors, dispatch) =>
  dispatch(focus('ArticleUpdater', Object.keys(errors)[0]))
})(ArticleUpdater);

const selector = formValueSelector('ArticleUpdater')

const mapStateToProps = state => {
  return{
  initialValues: state.singleArticle.data,
  catgory: selector(state, 'category'),
  loggedIn: state.auth.currentUser !== null
  }
}
export default ArticleUpdater = connect(mapStateToProps)(ArticleUpdater);


