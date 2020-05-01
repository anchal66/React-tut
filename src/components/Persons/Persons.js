import React, {Component} from 'react'
import Person from './Person/Person'

class Persons extends Component {
  static getDerivedStateFromProps(props, state){
    console.log('Perons getDerivedStateFromProps',props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('Perons shouldComponentUpdate')
    return true;
  }
   
  getSnapshotBeforeUpdate(prevProps, nextProps){
    console.log('Perons getSnapshotBeforeUpdate cn be used in scrolling');
    return {message: 'heelo'};
  }
  
  componentDidUpdate(prevProps, nextProps, snapshot){
    console.log('Perons componentDidUpdate');
    console.log(snapshot)
  }

  render(){
    console.log('Person JS Render')
    return this.props.persons.map((person, index) => {
      return (
        <Person key={person.id}
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)}
          name={person.name}
          age={person.age} />
      )
    })
  }
  }
  
export default Persons;