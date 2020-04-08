import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons: [
      {name: 'Katie', age: 20},
      {name: 'Kevin', age: 26},
      {name: 'Julie', age: 54}

    ]
  }

  switchNameHandler = () => {
    //console.log('was clicked');
    //this.state.persons[0].name = 'Brian';  // Doesn't work in react
    this.setState({
      persons: [
        {name: 'Brian', age: 20},
        {name: 'Kevin', age: 26},
        {name: 'Julie', age: 54}
      ]
    })
  }

  render() {
    
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> My Hobbies: studying</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>

      //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
    );
  }
}

export default App;
