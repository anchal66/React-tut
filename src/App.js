import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hiii</h1>
        <p>Welcome</p>
        <Person name="Avinash" age="27">Hiii there!</Person>
        <Person name="Avi" age="23"/>
      </div>
    );
  }
}

export default App;
