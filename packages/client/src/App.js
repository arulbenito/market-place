import React, { Component } from 'react';
import logo from './svg/getDone.svg';
import Header from './components/Header/Header';
import Main from "./components/Main/Main"
import './App.scss';

class App extends Component {
  state ={}
  componentDidMount(){
    try{
      const authToken = localStorage.getItem('authToken');
      let userObj = window.atob(authToken)
      const user = JSON.parse(userObj);
      this.setState({user})
    } 
    catch(e){
    }
  }
  render() {
    return (
      <div>
        <Header className="App-header" logoSrc={logo} user = {this.state.user}></Header>
        <Main user = {this.state.user}></Main>
      </div>
    );
  }
}

export default App;
