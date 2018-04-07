import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {Link} from 'react-router-dom';
import Input from './input';
import {login, menuToggle} from '../actions';
import {required, nonEmpty} from '../validators';
import './header.css';

//demo mode button

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
  }

  render() {
    return (
      <form
        className="login-form col-12"
        onSubmit={this.props.handleSubmit(values =>this.onSubmit(values)
        )}>
        <div className="col-4">
          <Field
            component={Input}
            type="text"
            name="username"
            placeholder="username"
            validate={[required, nonEmpty]}
          />
        </div>
        <div className="col-4">
          <Field
            component={Input}
            type="password"
            name="password"
            placeholder="password"
            validate={[required, nonEmpty]}
          />
        </div>
        <div className="col-2">
          <button type="submit" disabled={this.props.pristine || this.props.submitting}>
            Log in
          </button>
        </div>
        <div className="col-2">
          <Link className="sign-up-link" to='/register'>
            <button type='submit' onClick={()=>this.props.dispatch(menuToggle())}>Sign Up</button>
          </Link>
        </div>
      </form>
    );
  }
}

export default LoginForm = reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
