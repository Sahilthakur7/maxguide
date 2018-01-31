import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    let assignedClasses= [];
    let btnClass = '';

    if (props.showPersons){
        btnClass = classes.Red;
    }
    if(props.persons.length <=2){
        assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
        assignedClasses.push(classes.green);
    }

    return(
        <div className={classes.Cockpit}>

            <p className={assignedClasses.join(' ')}>Jaggu bndr, mast klndr</p>
            <button 
                onClick={props.clicked}
                className = {btnClass}
            >
                Toggle Persons
            </button>
        </div>
    )
}

export default cockpit;
