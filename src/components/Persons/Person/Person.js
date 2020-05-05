import React, { Component } from 'react';
import './Person.css'
import styled from 'styled-components';
import Auxillary from '../../../Auxillary'

const StyledDiv = styled.div`
width: 60%;
margin: auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;
@media(min-width: 500px){
    width: 450px;
}`

class Person extends Component {
    render() {
        console.log('PersonJS render')
        return (
            <React.Fragment>
                {/* // <div className="Person" style={style}> */}
            <StyledDiv>
                < p onClick={this.props.click} > I m a {this.props.name} with age {this.props.age}</p >
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </StyledDiv>
            </React.Fragment>
            

        )
    };
}


export default Person;