import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed, email} from '../validators';

export class RegistrationForm extends React.Component {

  onSubmit(values) {
    const {username, password, email} = values;
    const user = {username, password, email};
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)))
      .catch((err) => alert(err.errors.username));
  }

  render() {

    return (
      <form
        className="registration-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
        )}>
        <label htmlFor="email">e-mail</label>
        <Field component={Input} type="text" name="email" validate={[email]}/>
        <label htmlFor="username">Username</label>
        <Field
          component={Input}
          type="text"
          name="username"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor="password">Password</label>
        <Field
          component={Input}
          type="password"
          name="password"
          validate={[required, length({min: 7, max: 72}), isTrimmed]}
        />
        <label htmlFor="passwordConfirm">Confirm password</label>
        <Field
          component={Input}
          type="password"
          name="confirm"
          validate={[required, nonEmpty, matches('password')]}
        />
        <Link to='/dashboard'>
          <button className="back-to-dash" type='submit'>Back</button>
        </Link>
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
          >
          Register
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return{
  error: state.user.error
  }
}

RegistrationForm = reduxForm({
  form: 'RegistrationForm',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('RegistrationForm', Object.keys(errors)[0]))
})(RegistrationForm);

export default connect(mapStateToProps)(RegistrationForm)
