import React from 'react';
import './Person.css'

const person = (props) => {
    return <div className="Person">
        <p onClick={props.click}>I m a {props.name} with age {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
        {/* event in changed will auto sent by react */}
    </div>
};

export default person;