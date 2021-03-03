import React from 'react';
import axios from 'axios';
import Answer from './Answer';
/* eslint-disable */

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: this.props.helpful,
      helpfulClicked: false,
      clickedTestTwo: false
    }
    this.helpfulToggle = this.helpfulToggle.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
  }

  helpfulToggle(num) {
    if (this.state.helpfulClicked === false) {
      this.setState({
        helpfulClicked: !this.state.helpfulClicked,
        count: this.state.count + 1
      });
    } else {
      this.setState({
        helpfulClicked: !this.state.helpfulClicked,
        count: this.state.count - 1
      })
    }

  //console.log('QUESTION COMPONENT: ', answerKeys)

    // axios.post('http://localhost:3000/qa/questions?product_id=18080', num)
    //   .then(res => {
    //     this.setState({count : [...this.state.count + 1, num]})
    //   })
    //   .catch(err => console.log('COULD NOT ADD NUM: ', err))
  }

  addAnswer() {
    console.log('addAnswer is Clicked');
    this.setState({
      clickedTestTwo: !this.state.clickedTestTwo
    })
  }


  render() {
    // console.log('NUMBER: ', this.state.count);
    const answerKeys = Object.values(this.props.answer);
    const nextTest = this.state.clickedTestTwo ? 'yellow' : null;
    return (

      <div className="questions">
        <div className='qContainer'>
          <h4> Q: {this.props.question}</h4>
          <div className='helpfulLink' onClick={this.helpfulToggle}>Helpful? <span className='yes'>Yes</span>({this.state.count})</div>
          <div className='addAnswerLink' onClick={this.addAnswer}> Add Answer{nextTest}</div>
        </div>
        {answerKeys.map((answer, i) => (
          <Answer answer={answer.body} username={answer.answerer_name} date={answer.date} key={i} />
          ))}
      </div>
    );
  }
};

export default Question;
