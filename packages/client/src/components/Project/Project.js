import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Project.css';

export default class Project extends Component {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    projectOject: PropTypes.object
  };
  render() {
    return (
      <div id={this.props.id} className={this.props.className}>
      <p key={this.props.projectOject.ProjectId}>{this.props.projectOject.ProjectTitle}</p>
      </div>
    );
  }
}

