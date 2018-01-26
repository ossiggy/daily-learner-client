import React from 'react';

import './input.css';

export default class Input extends React.Component {
  componentDidUpdate(prevProps) {
    // if the user moves away from a field, change focus to the current field
    if (!prevProps.meta.active && this.props.meta.active) {
      this.input.focus();
    }
  }

  render() {
    let error;
    // if the user touched this input and entered an incorrect value, display an error
    if (this.props.meta.touched && this.props.meta.error) {
      error = <div className="form-error">{this.props.meta.error}</div>;
    }

    let warning;
    //if the user touched this input and there is a warning condition, display the warning
    if (this.props.meta.touched && this.props.meta.warning) {
      warning = (
        <div className="form-warning">{this.props.meta.warning}</div>
      );
    }

    return (
      <div className="form-input">
        <label htmlFor={this.props.input.name}>
          {this.props.label}
          {error}
          {warning}
        </label>
        <input
          {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          placeholder={this.props.input.name}
          ref={input => (this.input = input)}
        />
      </div>
    );
  }
}