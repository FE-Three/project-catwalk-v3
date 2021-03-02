import React from 'react';
import Answer from './Answer';
/* eslint-disable */

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false,
      clickedTestTwo: false
    }
    this.helpfulToggle = this.helpfulToggle.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
  }

  helpfulToggle() {
    console.log('CLICKED!')
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  addAnswer() {
    console.log('addAnswer is Clicked');
    this.setState({
      clickedTestTwo: !this.state.clickedTestTwo
    })
  }


  render() {
    const answerKeys = Object.values(this.props.answer);
    const number = this.state.isClicked ? 1: null;
    const nextTest = this.state.clickedTestTwo ? 'yellow' : null;
    return (

      <div className="questions">
        <div className='qContainer'>
        <h4> Q: {this.props.question}</h4>
          <span className='helpfulLink' onClick={this.helpfulToggle}>Helpful? <span className='yes'>Yes</span>({number})</span>
          <span className='addAnswerLink' onClick={this.addAnswer}> Add Answer{nextTest}</span>
        </div>
        {answerKeys.map((answer, i) => (
          <Answer answer={answer.body} username={answer.answerer_name} date={answer.date} key={i} />
          ))}
      </div>
    );
  }
};

export default Question;
