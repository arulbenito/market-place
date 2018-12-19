import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; 
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <NavLink className='Navbar_NavLink' to="/search">Search</NavLink>
        <NavLink className='Navbar_NavLink' to="/post">Post</NavLink>
        {!this.props.user &&
          (<React.Fragment>
            <NavLink className='Navbar_NavLink Button_thin' to="/login">Login</NavLink>
            <NavLink className='Navbar_NavLink Button_solid' to="/register">SignUp</NavLink>
          </React.Fragment>)}
          {this.props.user &&
          (<React.Fragment>
            <NavLink className='Navbar_NavLink' to="/account">Hi {this.props.user.name}</NavLink>
            <NavLink className='Navbar_NavLink Button_solid' to="/logout">Logout</NavLink>
          </React.Fragment>)}
      </div>
    );
  }
}


