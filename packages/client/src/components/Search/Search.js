import React, { Component } from 'react';
import Projects from '../Projects/Projects'
import { searchProjects } from '../../services/projectService'
import './Search.scss';

export default class Search extends Component {
  state = {
    projectList: [],
    launch: true
  }

  getProjects = async (e) => {
    this.state.launch = false;
    e.preventDefault();
    const searchString = e.target.projectName.value;
    /*
    const api_call = await fetch(`/api/search?keyword=${searchString}`);
    const data = await api_call.json();*/
    const data = searchProjects(searchString);
    this.setState({ projectList: data });
  }
  componentDidMount() {
    if (this.props.showAll) {
      const data = searchProjects();
      this.setState({ projectList: data });
    }
  }

  render() {
    return (
      <div className="search page">
        <form className="search-form form" onSubmit={this.getProjects}>
          <input className="search-input" type="text" name="projectName" placeholder="Search.."></input>
          <button className="search-submit">Search</button>
        </form>
        <Projects className='projects' id='projects' projects={this.state.projectList} launch={this.state.launch} showAll={this.props.showAll}></Projects>
      </div>
    );
  }
}

