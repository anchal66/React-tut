import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // State can be used on class which extends compont we can use other property but state is specl property
  //If properties of state changes it reders the changed value in HTML too
  state ={
    persons:[
      {name: 'Avinash', age: 27},
      {name: 'Avi', age: 23}
    ],
    otherState: 'it will not be affectef unless is set'
  }

  switchNameHandler = ()=>{
    // this.state.persons[0].name ='Anshu' //not work
    this.setState({
      persons:[
        {name: 'AAnshu', age: 27},
        {name: 'Avi', age: 3}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hiii</h1>
        <p>Welcome</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hiii there!</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      </div>
    );
  }
}

export default App;
