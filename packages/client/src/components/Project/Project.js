import React, { Component } from 'react';
import moment from 'moment'

import './Project.css';

export default class Project extends Component {
  state  = {
    project: {}
  }
  getProject = async () => {
    const id = this.props.match.params.id;
    const api_call = await fetch(`/api/search/${id}`);
    const data = await api_call.json();
    this.setState({ project:data });
    console.log('id'+id)
  }
  componentDidMount(){
    this.getProject();
  }
  render(){
    return (
      <div className='card project' key={this.state.project.ProjectId}>
        <div className='card-header'>{this.state.project.ProjectTitle}</div>
        <div className='card-body'>
        
          <span className='card-text'>{this.state.project.ProjectBidType}</span> |
          <span className='card-text'>{this.state.project.ProjectBidRate}</span> |
          <span className='card-text'>Posted {moment(this.state.project.ProjectPostedon).fromNow()}</span> |
          <span className='card-text font-weight-bold'>Expires {moment(this.state.project.ProjectBidEndDateTime).fromNow()}</span> |
          <span className='card-text'>{this.state.project.ProjectBidsReceived ==='0' ? 'Be the first to Bid' : 'Bids Received : ' + this.state.project.ProjectBidsReceived}</span> |
          <p className='card-text'>{this.state.project.ProjectDescription}</p>
          <div>
            <span className='card-text text-muted'>{this.state.project.ProjectTags ? 'Tags: ' + this.state.project.ProjectTags : ''}</span>
            <span className='card-text text-muted'>{this.state.project.ProjectLabels ? 'Labels: '  + this.state.project.ProjectLabels : ''}</span>
          </div>

        </div>
        <div class="card-footer text-muted">
        <span className='card-text'>Posted By {this.state.project.ProjectPostedBy}</span> 
        </div>
      </div>
    )
  }
}