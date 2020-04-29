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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { id:'srs4', name: event.target.value, age: 27 },
        { id:'gfcd4', name: 'Avi', age: 3 }
      ]
    })
  }

  deletePersonHandler = (personIndex)=>{
    //we should not pass dirctly the reference for orgnl source of array So:
    // const persons = this.state.persons.slice();
    //OR
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
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
          {this.state.persons.map((person, index)=>{
            return <Person key={person.id}
            click={()=>this.deletePersonHandler(index)}
             name={person.name}
              age={person.age}/>
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
