import React from 'react';

const person = (props)=> {
    return <div>
        <p>I m a {props.name} with age {props.age}</p>
        <p onClick={props.passRefForHandler}>{props.children}</p>
        </div>
};

export default person;