import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';

class App extends Component {
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
                    {this.state.persons.map((person,index) => {
                        return (
                            <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name} 
                                age={person.age}
                                key={person.id}
                                changed = { (event) =>this.nameChangeHandler(event,person.id)}/>
                        )
                    })}

                </div>
        }

        let classes= [];
        if(this.state.persons.length <=2){
            classes.push('red');
        }
        if(this.state.persons.length <= 1){
            classes.push('bold');
        }

        return (
                <div className="App">
                    <p className={classes.join(' ')}>Jaggu bndr, mast klndr</p>
                    <button 
                        onClick={ this.togglePersonsHandler}
                        >
                        Toggle Persons
                    </button>
                    {persons}
                    <h1>Hello</h1>
                </div>
        );
    }
}

export default App;
