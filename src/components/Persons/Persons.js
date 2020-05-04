import React, {PureComponent} from 'react'
import Person from './Person/Person'

class Persons extends PureComponent {
  static getDerivedStateFromProps(props, state){
    console.log('Perons getDerivedStateFromProps',props);
    return state;
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('Perons shouldComponentUpdate')
  //   if(nextProps.persons !== this.props.persons){
  //     return true
  //   }
  //   return false;
  //   //note persons caontains onlu pointer not object but ir will work ccoz in code we are craeting new o
  //   //object of persons [... per] so new pointer is genetertaed
  // }
   
  getSnapshotBeforeUpdate(prevProps, nextProps){
    console.log('Perons getSnapshotBeforeUpdate cn be used in scrolling');
    return {message: 'heelo'};
  }
  
  componentDidUpdate(prevProps, nextProps, snapshot){
    console.log('Perons componentDidUpdate more used');
    console.log(snapshot)
  }
  componentWillUnmount(){
    console.log('componentWillUnmount for cleaup work')
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