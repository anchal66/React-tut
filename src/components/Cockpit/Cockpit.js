import React, {useEffect} from 'react'
import styled from 'styled-components';

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

const cockpit = (props) => {
    useEffect(()=>{
      console.log('USe effect: it is called everytime compont ceated or updats')
      //Can be use for http
    },[]);
    const classes = []
    if (props.persons.length <= 2) {
      classes.push('red');
    }
    if (props.persons.length <= 1) {
      classes.push('bold');
    }
    return (
        <div>
            <h1>{props.title}HIiiiiiii</h1>
            <p className={classes.join(' ')}>Welcome</p>
            <StyledButton alt={props.showPerson}
                onClick={props.clicked}>Show Form</StyledButton>
        </div>
    );
}

export default cockpit;