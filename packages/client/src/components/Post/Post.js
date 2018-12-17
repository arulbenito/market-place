import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Post.css';

export default class Post extends Component {
  static propTypes = {
    logoSrc: PropTypes.string
  };
  render() {
    return (
      <div className="Post">
        <form onSubmit="">
          <input className="Post_input" type="text" name="projectName"></input>
          <button className="Post_submit">Post</button>
        </form>
      </div>
    );
  }
}

