import React, { Component } from 'react';
import Pagination from '../Pagination/Pagination';
import { getQuote } from '../../utils/utils'
import { getUserName } from '../../utils/utils'


import moment from 'moment'

import './Projects.css';
import _ from 'lodash';

export default class Projects extends Component {
  handlePageChange = page => {
    this.setState({ currentPage: page })
  }

  state = {
    pageSize: 2,
    currentPage: 1,
    projects: this.props.projects
  }

  paginate = () => {
    const startIndex = (this.state.currentPage - 1) * this.state.pageSize;
    return _(this.props.projects).slice(startIndex).take(this.state.pageSize).value();
  }

  render() {

    const projectCount = this.props.projects.length;
    if (projectCount === 0 && !this.props.launch) {
      return (<p> There are no projects available at the moment..</p>);
    }
    const projectsPerPage = this.paginate();
    return (
      <div id={this.props.id} className={this.props.className}>
        <p>{!this.props.launch && 'showing ' + projectCount + ' projects'}</p>
        {projectsPerPage.map(project => (
          <div className='card' key={project.ProjectId} id={project.ProjectId}>
            <div className='card-header'><a href={`/project/${project.ProjectId}`} >{project.ProjectTitle}</a></div>
            <div className='card-body'>

              <span className='card-text'>{project.ProjectBidType}</span> |
              <span className='card-text'>{getQuote(project.ProjectId)}</span> |
              <span className='card-text'>Posted {moment(project.ProjectPostedon).fromNow()}</span> |
              <span className='card-text font-weight-bold'>Expires {moment(project.ProjectBidEndDateTime).fromNow()}</span> |
              <span className='card-text'>{project.ProjectBidsReceived === '0' ? 'Be the first to Bid' : 'Bids Received : ' + project.ProjectBidsReceived}</span> |
              <p className='card-text'>{project.ProjectDescription}</p>
              <div>
                <span className='card-text text-muted'>{project.ProjectTags ? 'Tags: ' + project.ProjectTags : ''}</span>
                <span className='card-text text-muted'>{project.ProjectLabels ? 'Labels: ' + project.ProjectLabels : ''}</span>
              </div>

            </div>
            <div className="card-footer text-muted">
              <span className='card-text'>Posted By {getUserName(project.ProjectPostedBy)}</span>
            </div>
          </div>
        )
        )}
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

