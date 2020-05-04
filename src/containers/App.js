import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  // State can be used on class which extends compont we can use other property but state is specl property
  //If properties of state changes it reders the changed value in HTML too

  constructor(props){
    super(props);
    console.log('app constructor')
    this.state = {
      persons: [
        { id: 'sqsq1', name: 'Avinash', age: 27 },
        { id: 'ggdgh1', name: 'Avi', age: 23 },
        { id: 'ggdgh12', name: 'Avinashhh', age: 28 },
      ],
      otherState: 'it will not be affectef unless is set',
      showPerson: false
      // this is primitive way to declare state here in constructor we cam use this also
    }
  }

  static getDerivedStateFromProps(props, state){
    console.log('called getDerivedStateFromProps', props)
    return state;
  }

  // componentWillMount(){
  //   console.log('componentWillMount not often used')
  // }

  componentDidMount(){
    console.log('componentDidMount we add http reqs')
  }

  // shouldComponentUpdate(nextProps, nextProps){
  //   console.log('')
  // }

  componentDidUpdate(){
    console.log(' componentDidUpade')
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log(' Should compent update')
    return true;
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
    console.log('render ')
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
