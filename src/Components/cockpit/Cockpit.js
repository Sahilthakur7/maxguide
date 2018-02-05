import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    let assignedClasses= [];
    let btnClass = classes.Button;

    if (props.showPersons){
        btnClass = [classes.Button,classes.Red].join(' ');
    }
    if(props.persons.length <=2){
        assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
        assignedClasses.push(classes.green);
    }

    return(
        <Aux>

            <p className={assignedClasses.join(' ')}>Jaggu bndr, mast klndr</p>
            <button 
                onClick={props.clicked}
                className = {btnClass}
            >
                Toggle Persons
            </button>
        </Aux>
    )
}

export default cockpit;
