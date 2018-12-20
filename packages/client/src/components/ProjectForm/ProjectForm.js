import React from 'react';
import Input from '../Input/Input'
import TextArea from '../Input/TextArea'
import Select from '../Input/Select'
import Form from '../Form/Form'
import { addProject } from '../../services/projectService'
import { getCurrentUser } from '../../utils/utils'



import Joi from 'joi-browser'

import './ProjectForm.scss';

export default class ProjectForm extends Form {

  state = {
    data: {
      title: '',
      description: '',
      bidType: '',
      expiresOn: '',
      category: '',
      tags: ''
    },
    errors: {
    },
    posted: false
  }

  doSubmit = async () => {
    const user = getCurrentUser();
    const status = await addProject(this.state.data, user);
    this.setState({ posted: true });
  }

  schema = {
    title: Joi.string().required().label('Title'),
    description: Joi.string().required().label('Description'),
    bidType: Joi.string().required().label('Type'),
    expiresOn: Joi.string().required().min(10).label('Expires On'),
    category: Joi.string().label('Category'),
    tags: Joi.string().label('Tags'),
  }

  bidOptions = [
    { _id: 1, name: "Hourly" },
    { _id: 2, name: "Fixed" }
  ]

  loginUser = () => {
    window.location = '/register';
  }

  render() {
    if (this.state.posted) {
      return (<p className="projectForm_message"> Your project was posted successfully!!!!</p>);
    }
    return (
      <div className="ProjectForm page">
        {(!this.props.user) && (<button className="btn btn-primary project-bid" onClick={this.loginUser}>Login/Sign Up to post a project</button>)}
        {(this.props.user) &&
          (<form className="form-signin form" onSubmit={this.handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">Post a Project</h1>
            <Input label="Title" name='title' value={this.state.data.title} type="text" onChange={this.handleChange} focus="true" error={this.state.errors.title}></Input>
            <TextArea label="Description" name='description' rows='7' value={this.state.data.password} type="textarea" onChange={this.handleChange} error={this.state.errors.description}></TextArea>
            <Select label="Bid Type" name='bidType' value={this.state.data.bidType} onChange={this.handleChange} options={this.bidOptions} error={this.state.errors.bidType}></Select>
            <Input label="Bid Close Date" name='expiresOn' value={this.state.data.expiresOn} onChange={this.handleChange} type="datetime-local" error={this.state.errors.expiresOn}></Input>
            <Input label="Category" name='category' value={this.state.data.category} type="text" onChange={this.handleChange} error={this.state.errors.category}></Input>
            <Input label="Tags" name='tags' value={this.state.data.tags} type="text" onChange={this.handleChange} error={this.state.errors.tags}></Input>
            <button disabled={this.validate()} className="btn btn-primary">Submit Project</button>
          </form>)}
      </div>
    )
  }
}