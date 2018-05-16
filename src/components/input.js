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
  

    return (
      <div className="form-input">
        <label htmlFor={this.props.input.name}>
          {this.props.label}
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