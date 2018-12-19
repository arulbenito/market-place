import React from 'react';
import Input from '../Input/Input'
import TextArea from '../Input/TextArea'
import Select from '../Input/Select'
import Form from '../Form/Form'

import Joi from 'joi-browser'

import './ProjectForm.css';

export default class ProjectForm extends Form {

  state = {
    data: {
      title:'',
      description:'',
      bidType:'',
      expiresOn:'',
      skills:'',
      category:'',
      tags:'',
      labels:''
    },
    errors:{
    }
  }

  doSubmit = () =>{
    console.log("submitted")
  }

  schema = {
    title: Joi.string().required().label('Title'),
    description: Joi.string().required().label('Description'),
    bidType: Joi.string().required().min(10).label('Type'),
    expiresOn: Joi.string().required().min(10).label('Expires On'),
    skills: Joi.string().label('Skills'),
    category: Joi.string().label('Category'),
    tags: Joi.string().label('Tags'),
    labels: Joi.string().label('Labels')
  }

  bidOptions =[
    {_id:1, name:"Hourly"},
    {_id:2, name:"Fixed"}
  ]


  render(){
    return (
      <div className="LoginForm">
        <form className="form-signin" onSubmit={this.handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Post a Project</h1>
          <Input label="Title" name ='title' value ={this.state.data.title} type="text" onChange={this.handleChange} focus="true" error = {this.state.errors.title}></Input>
          <TextArea label="Description" name ='description' rows='7' value ={this.state.data.password} type="textarea" onChange={this.handleChange} error = {this.state.errors.description}></TextArea>
          <Select label="Bid Type" name ='bidType' options={this.bidOptions} error = {this.state.errors.bidType}></Select>
          <Input label="Bid Close Date" name ='expiresOn' value ={this.state.data.expiresOn} onChange={this.handleChange} type="datetime-local" error = {this.state.errors.expiresOn}></Input>
          <Input label="Category" name ='category' value ={this.state.data.category} type="text" onChange={this.handleChange}  error = {this.state.errors.category}></Input>
          <Input label="Tags" name ='tags' value ={this.state.data.tags} type="text" onChange={this.handleChange}  error = {this.state.errors.tags}></Input>
          <button disabled={this.validate()} className="btn btn-primary">Submit Project</button>
        </form>
      </div>  
    ) 
  }
}