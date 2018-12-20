import React, { Component } from 'react';
import { getProject } from '../../services/projectService'
import { getQuote } from '../../utils/utils'
import { getUserName } from '../../utils/utils'

import moment from 'moment'

import './Project.scss';

export default class Project extends Component {
  state = {
    project: {}
  }
  getProject = async () => {
    const id = this.props.match.params.id;
    /*const api_call = await fetch(`/api/search/${id}`);
    const data = await api_call.json();*/
    //const id = this.props.id;
    const data = getProject(id);
    this.setState({ project: data });
  }
  loginUser = () => {
    window.location = '/register';
  }
  placeBid = () => {
    window.location = '/bid/' + this.props.match.params.id;;
  }
  componentDidMount() {
    this.getProject();
  }
  render() {
    return (
      <div className='card project page' key={this.state.project.ProjectId}>
        <div className='card-header'>{this.state.project.ProjectTitle}
          {(this.props.user) && (<button className="btn btn-primary project-bid" onClick={this.placeBid}>Place a Bid</button>)}
          {(!this.props.user) && (<button className="btn btn-primary project-bid" onClick={this.loginUser}>Login/Sign Up to Place a bid</button>)}
        </div>
        <div className='card-body'>
          <span className='card-text'>{this.state.project.ProjectBidType}</span> |
          <span className='card-text'>{getQuote(this.state.project.ProjectId)}</span> |
          <span className='card-text'>Posted {moment(this.state.project.ProjectPostedon).fromNow()}</span> |
          <span className='card-text font-weight-bold'>Expires {moment(this.state.project.ProjectBidEndDateTime).fromNow()}</span> |
          <span className='card-text'>{this.state.project.ProjectBidsReceived === '0' ? 'Be the first to Bid' : 'Bids Received : ' + this.state.project.ProjectBidsReceived}</span> |
          <p className='card-text'>{this.state.project.ProjectDescription}</p>
          <div>
            <span className='card-text text-muted'>{this.state.project.ProjectTags ? 'Tags: ' + this.state.project.ProjectTags : ''}</span>
            <span className='card-text text-muted'>{this.state.project.ProjectLabels ? 'Labels: ' + this.state.project.ProjectLabels : ''}</span>
          </div>

        </div>
        <div className="card-footer text-muted">
          <span className='card-text'>Posted By {getUserName(this.state.project.ProjectPostedBy)}</span>
        </div>
      </div>
    )
  }
}