import React, { Component } from 'react';
import Pagination from '../Pagination/Pagination';
import './Project.css';
import _ from 'lodash';

export default class Project extends Component {
  handlePageChange = page => {
    console.log("page change" + page)
    this.setState({currentPage:page})
  }
  state = {
    pageSize :2,
    currentPage:1,
    projects: this.props.projects
  }
  
  paginate = ()=> {
    const startIndex = (this.state.currentPage - 1 ) * this.state.pageSize;
    return _(this.props.projects).slice(startIndex).take(this.state.pageSize).value();
  }

  render() {

    const projectCount = this.props.projects.length;
    if (projectCount===0){
      return (<p> There are no projects available at the moment..</p>);
    }
    console.log("this.paginate()" + this.paginate());
    const projectsPerPage = this.paginate();
    return (
      <div id={this.props.id} className={this.props.className}>
      <p>showing {projectCount} projects</p> 
        <table className='table'>
          <thead>
            <tr>
              <th>Project Title</th>
              <th>Project Description</th>
              <th>Bid Closing on</th>
              <th>Posted by</th>
            </tr>
          </thead>
          <tbody>
            {projectsPerPage.map(project=>(
                <tr key={this.props.projects.ProjectId}>
                  <td>{project.ProjectTitle}</td>
                  <td>{project.ProjectDescription}</td>
                  <td>{project.ProjectBidEndDateTime}</td>
                  <td>{project.ProjectPostedBy}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <Pagination 
          itemsCount={projectCount} 
          pageSize={this.state.pageSize} 
          currentPage={this.state.currentPage} 
          onPageChange={this.handlePageChange}>
        </Pagination>
      </div>
    );
  }
}

