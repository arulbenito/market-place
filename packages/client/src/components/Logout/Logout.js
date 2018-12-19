import { Component } from 'react';

export default class Logout extends Component {

  componentDidMount(){
    localStorage.removeItem("authToken");
    window.location = '/'
  }
  render(){
    return null;
  }

}

