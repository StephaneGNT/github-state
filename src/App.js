// src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";

/* class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      working:true,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({ working: !this.state.working });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo-active" alt="logo" />
          <img src={logo} className="App-logo-inactive" alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button onClick={this.handleClick()}>Is Working ?</button>
        <Quote />
      </div>
    );
  }
}*/

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    let isLogoActive=this.state.isToggleOn? "App-logo-active" : "App-logo-inactive";
    return (
      <div>
        <header className="App-header">
          <img src={logo} className={isLogoActive} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button onClick={this.handleClick}>
          isWorking ?
        </button>
        <Quote />
      </div>
    );
  }
}

export default Toggle;