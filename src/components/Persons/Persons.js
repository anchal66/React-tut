import React from 'react'
import Person from './Person/Person'

const persons = (props) => {
  console.log('Person JS Render')
  return props.persons.map((person, index) => {
    return (
      <Person key={person.id}
        click={() => props.clicked(index)}
        changed={(event) => props.changed(event, person.id)}
        name={person.name}
        age={person.age} />
    )
  })
}
export default persons;