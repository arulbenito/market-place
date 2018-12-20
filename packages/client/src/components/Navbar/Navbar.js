import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

export default class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <NavLink className='Navbar-NavLink' to="/search">Search</NavLink>
        <NavLink className='Navbar-NavLink' to="/post">Post</NavLink>
        {!this.props.user &&
          (<React.Fragment>
            <NavLink className='Navbar-NavLink Button-thin' to="/login">Login</NavLink>
            <NavLink className='Navbar-NavLink Button-solid' to="/register">SignUp</NavLink>
          </React.Fragment>)}
        {this.props.user &&
          (<React.Fragment>
            <NavLink className='Navbar-NavLink' to="/account">Hi {this.props.user.name}</NavLink>
            <NavLink className='Navbar-NavLink Button-solid' to="/logout">Logout</NavLink>
          </React.Fragment>)}
      </div>
    );
  }
}


