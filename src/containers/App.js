import React, { PureComponent } from 'react';
import classes from './App.css';
import '../Components/Persons/Person/Person.css';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/cockpit/Cockpit';

class App extends PureComponent {
    constructor(props){
        super(props);
    }
    
    state = {
        persons: [
            {id: 1,name: 'Rooney', age: 32},
            {id: 2,name: 'RvP', age: 33},
            {id: 3,name: 'Alexis', age: 29}
        ],
        showPersons: false
    }

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons.slice();
        persons.splice(personIndex,1)
        this.setState({persons: persons})
    }

    nameChangeHandler = (event,id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = { ...this.state.persons[personIndex] };

        person.name = event.target.value;
        const persons = [ ...this.state.persons ]
        persons[personIndex] = person;


        this.setState({
            persons: persons
        });
    }



    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        })
    }



    render() {
        let persons = null;

        if (this.state.showPersons){
            persons= 
                <div>
                    <Persons persons={this.state.persons} 
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangeHandler}/>

                </div>

        }

        return (
            <div className={classes.App}>
                <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
                <Cockpit showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}/>
                {persons}
                <h1>Hello</h1>
            </div>
        );
    }
}

export default App;
