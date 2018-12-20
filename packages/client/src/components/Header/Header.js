import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar"
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-content">
          <a href='/'>
            <img className="header-logo" src={this.props.logoSrc} alt="logo" />
          </a>
          <h5>the market place</h5>
          <Navbar className="header-nav" user={this.props.user}></Navbar>
        </div>
      </header>
    );
  }
}

