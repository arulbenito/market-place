import React, { Component } from 'react';
import Projects from '../Projects/Projects'
import { getCurrentUser } from '../../utils/utils'
import { searchWiningProjects } from '../../services/projectService'
import './Account.scss';

export default class Account extends Component {
  state = {
    projectList: [],
    launch: true
  }

  componentDidMount() {
    const user = getCurrentUser();
    const data = searchWiningProjects(user);
    console.log(user)

    this.setState({ projectList: data });
  }

  render() {
    return (
      <div className="account page">
        <h1 className="h3 mb-3 font-weight-normal account-header text-success">Your winning Projects</h1>
        <Projects className='projects' id='projects' projects={this.state.projectList} launch={this.state.launch} showAll={this.props.showAll}></Projects>
      </div>
    );
  }
}

