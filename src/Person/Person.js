import React from 'react';

const person = (props) => {
    return <div>
        <p>I m a {props.name} with age {props.age}</p>
        <p onClick={props.click}>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
        {/* event in changed will auto sent by react */}
    </div>
};

export default person;