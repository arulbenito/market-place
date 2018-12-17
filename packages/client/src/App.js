import React, { Component } from 'react';
import logo from './svg/getDone.svg';
import Header from './components/Header/Header';
import Main from "./components/Main/Main"
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header className="App-header" logoSrc={logo}></Header>
        <Main></Main>
      </div>
    );
  }
}

export default App;
