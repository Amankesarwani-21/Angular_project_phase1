import React, { Component } from 'react';
import logo from '.logo.svg';
import '.App.css';

class App extends Component {
  render() {
    return (
      div className=App
        header className=App-header
          img src={logo} className=App-logo alt=logo 
          h1 className=App-titleWelcome to Reacth1
        header
        p className=App-intro
          To get started, edit codesrcApp.jscode and save to reload.
        p
      div
    );
  }
}

export default App;