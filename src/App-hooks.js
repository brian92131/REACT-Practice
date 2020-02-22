import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = (props) => {

  const [personsState, setPersonsState] = useState ({
    persons: [
      {name: 'Katie', age: 20},
      {name: 'Kevin', age: 26},
      {name: 'Julie', age: 54}

    ],
    otherState : 'Some other state'
    
  });
  console.log(personsState);

  const switchNameHandler = () => {
    //console.log('was clicked');
    //this.state.persons[0].name = 'Brian';  // Doesn't work in react
    setPersonsState({
      persons: [
        {name: 'Brian', age: 20},
        {name: 'Kevin', age: 26},
        {name: 'Julie', age: 54}
      ],
      otherState: 'Some other state'
    })
  }
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}> My Hobbies: studying</Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>

      //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
    );
  }


export default app;



