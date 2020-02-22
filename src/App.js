import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './App.css';
import Question from './Question';


const title = <h3 className="Header">A <font color='lightgreen'>green</font> San Diego for employing the disabled elderly.</h3>;
const videoURL = <h2 className="Player"><ReactPlayer url='https://www.youtube.com/watch?v=C54wbdKLbLQ' playing/></h2>;
const footer = <h3 className="footer">Contact us at 1-800-123-4567</h3>;
const mission = <h3>We are a non-profit</h3>;


function handleClickLinkButton(e) {
      e.preventDefault();
      window.location = 'http://www.msn.com';
      console.log('The link was clicked.');
}


class App extends Component {

  getStudentInformation() {
    fetch('http://localhost:8083/welcome/student?name=KatieCallahan&id=456789')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }

  state = {
    questions: [
      { id: '1', title: 'We are a non-profit employing the elderly in San Diego.' },
      { id: '2', title: 'Our Mission is to populate drought tolerant plants into the elderly communities.' },
      { id: '3', title: 'and to grow our company to serve all the elderly in the City of San Diego.' },
    ],
  
     displayQuestions: false
  
  }

  displayQuestion = () => {
    this.setState({
        displayQuestions: !this.state.displayQuestions
    })
  }

    render() {
      let questions = null;
      if ( this.state.displayQuestions ) {
        questions = (
          <div>
            { this.state.questions.map((question, index) => {
              return <Question key={question.id}
              title={question.title} />
            })}
          </div>
        )
      } 
      return (
             
          <div className="App">
          {title} 
          {videoURL}
          {mission}
          <button className="Button" onClick={this.displayQuestion}>About Us</button>
          {questions}
          {footer}
          </div>
      )

    }    

}

export default App;
