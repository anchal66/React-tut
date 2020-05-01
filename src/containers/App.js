import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  // State can be used on class which extends compont we can use other property but state is specl property
  //If properties of state changes it reders the changed value in HTML too
  state = {
    persons: [
      { id: 'sqsq1', name: 'Avinash', age: 27 },
      { id: 'ggdgh1', name: 'Avi', age: 23 },
      { id: 'ggdgh12', name: 'Avinashhh', age: 28 },
    ],
    otherState: 'it will not be affectef unless is set',
    showPerson: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    //we should not pass dirctly the reference for orgnl source of array So:
    // const persons = this.state.persons.slice();
    //OR
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({
      showPerson: !doesShow
    });
  }

  render() {
    let persons = null
    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
        </div>
      );

    }

    return (
      <div className="App">
        <Cockpit 
        title={this.props.title}
        showPerson={this.state.showPerson}
        persons={this.state.persons} 
        clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
