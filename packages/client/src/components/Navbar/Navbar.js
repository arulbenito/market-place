import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; 
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <NavLink className='Navbar_NavLink' to="/search">Search</NavLink>
        <NavLink className='Navbar_NavLink' to="/post">Post</NavLink>
        <NavLink className='Navbar_NavLink Button_thin' to="/login">Login</NavLink>
        <NavLink className='Navbar_NavLink Button_solid' to="/signup">Join Now</NavLink>
      </div>
    );
  }
}


