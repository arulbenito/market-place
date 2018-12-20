import React from 'react';
import Input from '../Input/Input'
import Form from '../Form/Form'
import Joi from 'joi-browser'
import { addUser } from '../../services/userService'
import './RegisterForm.scss';

export default class RegisterForm extends Form {

  state = {
    data: {
      username: '',
      password: '',
      name: '',
    },
    errors: {
    }
  }

  doSubmit = async () => {
    const status = await addUser(this.state.data);
    if (status) {
      localStorage.setItem('authToken', status);
      // this.props.history.push('/post')
      window.location = '/post';
    } else {
      const errors = { ...this.state.errors }
      errors.username = "User already exist"
      this.setState({ errors });
    }
  }

  schema = {
    username: Joi.string().email().required().label('Email'),
    password: Joi.string().required().min(5).label('Password'),
    name: Joi.string().required().min(2).label('Name')
  }

  render() {
    return (
      <div className="registerForm page">
        <form className="form-signin form" onSubmit={this.handleSubmit}>
          <h1 className="h3 mb-3 font-weight-normal">Sign up</h1>
          <h6 className="h6 mb-3 font-weight-normal">Already have an account?<a href='/login'> login</a> </h6>
          <Input label="Email" name='username' value={this.state.data.username} type="text" onChange={this.handleChange} focus="true" error={this.state.errors.username}></Input>
          <Input label="Password" name='password' value={this.state.data.password} type="password" onChange={this.handleChange} focus="false" error={this.state.errors.password}></Input>
          <Input label="Name" name='name' value={this.state.data.name} type="text" onChange={this.handleChange} focus="false" error={this.state.errors.name}></Input>
          <button disabled={this.validate()} className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    )
  }
}