import React, { Component } from 'react';
import Input from '../Input/Input'

import './LoginForm.css';

export default class LoginForm extends Component {

  state = {
    login: {
      username:'',
      password:''
    },
    errors:{

    }
  }

  validate = ()=> {
    const errors = {};
    if (this.state.login.username.trim() === '')
      errors.username = "username is required"
    if (this.state.login.password.trim() === '')
      errors.password = "password is required"
    return Object.keys(errors).length === 0 ? null : errors;
  }

  validateElement = ({name, value})=> {
    const errors = {};
    if (name ==='username'){
      if(value.trim()==='') return  "username is required"
    }
    if (name ==='password'){
      if(value.trim()==='') return  "password is required"
    }
  }

  handleSubmit = e =>{
    e.preventDefault();
    const errors = this.validate()
    this.setState({errors:errors || ''})
  }

  handleChange = e =>{
    const errors = {...this.state.errors};
    const errorMessage = this.validateElement(e.currentTarget)
    if (errorMessage){
      errors[e.currentTarget.name] = errorMessage;
    } else{
      delete errors[e.currentTarget.name];
    }
    console.log(errorMessage)

    const login = {...this.state.login};
    login[e.currentTarget.name]= e.currentTarget.value;

    this.setState({login})
    this.setState({errors:errors || ''})

  }

  render(){
    return (
      <div className="LoginForm">
        <form className="form-signin" onSubmit={this.handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Login</h1>
          <Input name ='username' value ={this.state.login.username} type="text" onChange={this.handleChange} focus="true" error = {this.state.errors.username}></Input>
          <Input name ='password' value ={this.state.login.password} type="password" onChange={this.handleChange} focus="false" error = {this.state.errors.password}></Input>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>  
    ) 
  }
}