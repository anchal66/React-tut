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
    return (
      <div className="App">
        <h1>Hiii</h1>
        <p>Welcome</p>
        <button style={style}
          onClick={this.togglePersonsHandler}>Switch name</button>
        {this.state.showPerson ? 
          <div >
            <Person name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, 'aparna')}
              changed={this.nameChangedHandler}
            >Hiii there!
         </Person>
            <Person name={this.state.persons[1].name}
              age={this.state.persons[1].age} />
          </div> : null
        }
      </div>
    );
  }
}

export default App;
