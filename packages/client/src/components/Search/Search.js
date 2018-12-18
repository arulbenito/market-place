import React, { Component } from 'react';
import Project from '../Project/Project'
import './Search.css';

export default class Search extends Component {
  state  = {
    projectList: []
  }
  getProjects = async (e) => {
    e.preventDefault();
    const searchString = e.target.projectName.value;
    const api_call = await fetch(`/api/search?keyword=${searchString}`);
    const data = await api_call.json();
    this.setState({ projectList:data.projects });
    console.log(this.state.projectList, searchString);
  }
  render() {
    return (
      <div className="search">
        <form className="search_form" onSubmit={this.getProjects}>
          <input className="search_input" type="text" name="projectName" placeholder="Search.."></input>
          <button className="search_submit">Search</button>
        </form>
        <Project className='project' id='project' projects={this.state.projectList}></Project>
      </div>
    );
  }
}

