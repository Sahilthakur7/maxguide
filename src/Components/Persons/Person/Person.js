import React from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

const person = (props) => {
    return (
        <WithClass classes={classes.Person}>
            <p onClick={props.click}>My name is {props.name} and age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </WithClass>
    );
}

export default person;

