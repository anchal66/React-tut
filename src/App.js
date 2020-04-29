import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hiii</h1>
        <p>Welcome</p>
        <Person></Person>
      </div>
    );
  }
}

export default App;
