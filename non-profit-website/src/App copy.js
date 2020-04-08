import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './App.css';
import Question from './Question';


const title = <h1>Local non-profit for employing the disabled elderly.</h1>;
const videoURL = <h2 className="Player"><ReactPlayer url='https://www.youtube.com/watch?v=C54wbdKLbLQ'/></h2>;



function handleClickLinkButton(e) {
      e.preventDefault();
      window.location = 'http://www.msn.com';
      console.log('The link was clicked.');
}


class App extends Component {

  state = {
    questions: [
      { id: 'fdsd', title: 'Why is the sky blue?' },
      { id: 'adsf', title: 'Who invented pizza?' },
      { id: 'afdsf', title: 'Is green tea overrated?' },
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
      return (
        <div className="App">
          {title} 
          {videoURL}
          <button className="Button" onClick={handleClickLinkButton}>Click me</button>
          <button className="Button" onClick={this.displayQuestion}>View Unanswered Questions</button>
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
          <div className="App">
          <h1>Question Genie</h1>
          <button className="btn" onClick={this.displayQuestion}>View     Unanswered Questions</button>
          {questions}
          </div>
        </div>
      );
    }    

}

export default App;
