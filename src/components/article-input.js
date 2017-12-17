import React from 'react';

import './article-input.css';

export default class ArticleInput extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
      this.input.focus();
    }
  }
  render() {
    const Element = this.props.element || 'input';

    let error;
    if (this.props.meta.touched && this.props.meta.error){
      error = <div className="article-form-error">{this.props.meta.error}</div>
    }

    let warning;
    if (this.props.meta.touched && this.props.meta.warning){
      warning = <div className="article-form-warning">{this.props.meta.warning}</div>
    }

    //conditional that if label is tags, we loop through the tags
    //and push them to a tags array?
    // let tagArray =[];
    // if(this.props.input.name==='tag'){
    //   input.map((i, field) => {
    //     tagArray.push(field)
    //   })
    // }

    return (
      <div className="article-form-input">
        <label htmlFor={this.props.input.name}>
          {this.props.label}
          {error}
          {warning}
        </label>
        <Element
          {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          ref={input => (this.input = input)}
          value={this.props.value}
        />
      </div>
    )
  }
}