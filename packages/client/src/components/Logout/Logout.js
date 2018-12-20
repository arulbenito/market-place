import { Component } from 'react';
import { redirectUrl } from '../../utils/utils'


export default class Logout extends Component {

  componentDidMount() {
    localStorage.removeItem("authToken");
    redirectUrl('/');
  }
  render() {
    return null;
  }
}

