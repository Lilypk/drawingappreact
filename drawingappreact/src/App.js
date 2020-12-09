import React, { Component } from "react";
import './App.css';
import Login from './Login';
import Feed from './Feed';
import Canvas from './Canvas';
import User from './User'
class App extends Component {
  constructor() {
    super()
  }
  render () {
    return (
    <div className="App">
     
      <Login />
      <Feed />
      <Canvas />
      <User />
    </div>
    
  );
}
}

export default App;

