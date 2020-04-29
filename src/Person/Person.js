import React from 'react';

const person = (props)=> {
    return <p>I m a {props.name} with number {Math.floor(Math.random()*100)} and age {props.age}</p>
};

export default person;