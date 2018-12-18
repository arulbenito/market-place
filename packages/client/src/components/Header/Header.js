import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar"
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-content">
            <img className="header-logo" src={this.props.logoSrc}  alt="logo" />
            <h5>the market place</h5>
            <Navbar className="header-nav"></Navbar>
        </div>
      </header>
    );
  }
}

