import React, { Component } from 'react';
import Projects from '../Projects/Projects'
import {searchProjects} from '../../services/projectService'
import './Search.css';

export default class Search extends Component {
  state  = {
    projectList: []
  }
  getProjects = async (e) => {
    e.preventDefault();
    const searchString = e.target.projectName.value;
    /*
    const api_call = await fetch(`/api/search?keyword=${searchString}`);
    const data = await api_call.json();*/
    const data = searchProjects(searchString);
    this.setState({ projectList:data });
  }
  render() {
    return (
      <div className="search">
        <form className="search_form" onSubmit={this.getProjects}>
          <input className="search_input" type="text" name="projectName" placeholder="Search.."></input>
          <button className="search_submit">Search</button>
        </form>
        <Projects className='projects' id='projects' projects={this.state.projectList} ></Projects>
      </div>
    );
  }
}

