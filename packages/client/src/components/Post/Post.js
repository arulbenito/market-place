import React, { Component } from 'react';
import './Post.css';

export default class Post extends Component {
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

