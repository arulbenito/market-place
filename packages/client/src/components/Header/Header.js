import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from "../Navbar/Navbar"
import './Header.css';

export default class Header extends Component {
  static propTypes = {
    logoSrc: PropTypes.string
  };
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

