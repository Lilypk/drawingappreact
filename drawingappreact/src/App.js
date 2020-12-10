import React, { Component } from "react";
import './App.css';
import Homepage from './Homepage';
import Feed from './Feed';
import Canvas from './Canvas';
import User from './User'
import Register from './Register'
import Login from './Login'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      homeJson: null,
      registerJson: null,
      loginJson: null,
      feedJson: null,
      userJson: null,
      canvasJson: null
    };
  }
  componentDidMount() {
    fetch("https://drawingapp-capstone.herokuapp.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((output) => this.setState({ homeJson: output }));

    fetch("https://drawingapp-capstone.herokuapp.com/register", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((output) => this.setState({ registerJson: output }));

    fetch("https://drawingapp-capstone.herokuapp.com/login", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((output) => this.setState({ loginJson: output }));
      
    fetch("https://drawingapp-capstone.herokuapp.com/feed", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((output) => this.setState({ feedJson: output }));
    fetch("https://drawingapp-capstone.herokuapp.com/user", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((output) => this.setState({ userJson: output }));
    fetch("https://drawingapp-capstone.herokuapp.com/canvas", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((output) => this.setState({ canvasJson: output }));
  }
  
  
  render () {
    return (
    <div className="App">
     
      <Homepage />
      <Register />
      <Login />
      <Feed />
      <User />
      <Canvas />
    </div>
    
  );
}
}

export default App;

