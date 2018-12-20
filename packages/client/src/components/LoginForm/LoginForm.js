import React from 'react';
import Input from '../Input/Input'
import Form from '../Form/Form'
import { authUser } from '../../services/userService'
import { redirectUrl, changeRoute } from '../../utils/utils'
import Joi from 'joi-browser'
import './LoginForm.css';

export default class LoginForm extends Form {

  state = {
    data: {
      username: '',
      password: ''
    },
    errors: {
    }
  }

  doSubmit = () => {
    let result = authUser(this.state.data.username, this.state.data.password)
    if (result === "denied") {
      const errors = { ...this.state.errors }
      errors.username = "Invalid Username or password"
      this.setState({ errors });
    } else {
      localStorage.setItem('authToken', result);
      redirectUrl('/');
    }
  }

  schema = {
    username: Joi.string().email().required().label('Username'),
    password: Joi.string().required().min(5).label('Password')
  }

  render() {
    return (
      <div className="loginForm">
        <form className="loginForm-form" onSubmit={this.handleSubmit}>
          <h1 className="loginForm-form-header h3 mb-3 font-weight-normal">Login</h1>
          <h6 className="loginForm-form-subheaders h6 mb-3 font-weight-normal">Don't have an account?<a href='/register'> Sign up now</a> </h6>
          <Input label="Email" name='username' value={this.state.data.username} type="text" onChange={this.handleChange} focus="true" error={this.state.errors.username}></Input>
          <Input label="Password" name='password' value={this.state.data.password} type="password" onChange={this.handleChange} focus="false" error={this.state.errors.password}></Input>
          <button disabled={this.validate()} className="btn btn-primary">Login</button>
        </form>
      </div>
    )
  }
}