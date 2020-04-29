import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // State can be used on class which extends compont we can use other property but state is specl property
  //If properties of state changes it reders the changed value in HTML too
  state = {
    persons: [
      { name: 'Avinash', age: 27 },
      { name: 'Avi', age: 23 }
    ],
    otherState: 'it will not be affectef unless is set',
    showPerson: false
  }

  switchNameHandler = (newName) => {
    // this.state.persons[0].name ='Anshu' //not work
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: 'Avi', age: 3 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 27 },
        { name: 'Avi', age: 3 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({
      showPerson: !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      curson: 'pointer'
    }
    let persons = null
    if (this.state.showPerson) {
      persons = (
        <div >
          {this.state.persons.map(person=>{
            return <Person name={person.name} age={person.age} />
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hiii</h1>
        <p>Welcome</p>
        <button style={style}
          onClick={this.togglePersonsHandler}>Show Form</button>
        {persons}
      </div>
    );
  }
}

export default App;
