import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Person from '../components/Persons/Person/Person';

const StyledButton = styled.button`
background-color: ${props=> props.alt ? 'red': 'green'};
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      curson: pointer;
      &:hover {
        background-color: ${props=> props.alt ? 'salmon': 'lightgreen'};
        color: black
      }
`;

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
          {this.state.persons.map((person, index) => {
            return <Person key={person.id}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              name={person.name}
              age={person.age} />
          })}
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'blue',
      //   color: 'white'
      // }
    }

    const classes = []

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hiii</h1>
        <p className={classes.join(' ')}>Welcome</p>
        <StyledButton alt={this.state.showPerson}
        onClick={this.togglePersonsHandler}>Show Form</StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
