import React from 'react';
// import axios from 'axios';
import Answer from './Answer';
/* eslint-disable */

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: this.props.helpful,
      helpfulClicked: false,
      clickedTestTwo: false,
      loadAllClick: false
    }
    // console.log('answerOne: ', answerOne);
    this.helpfulToggle = this.helpfulToggle.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.loadTwo = this.loadTwo.bind(this);
    // this.loadAll = this.loadAll.bind(this);
  }

  helpfulToggle() {
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

  loadTwo() {
    const answerKeys = Object.values(this.props.answer);
    const sorted = answerKeys.sort((a, b) => {
      return b.helpfulness - a.helpfulness
    })
    return sorted.slice(0, 2).map((answer, i) => (
      <Answer answer={answer.body} username={answer.answerer_name} date={answer.date} helpfulness={answer.helpfulness} key={i} />
      ))
    }

    // loadAll() {
    //   if (this.state.helpfulClicked === false) {
    //     this.setState({
    //       loadAllClick: !this.state.loadAllClick,
    //     });
    //   const answerKeys = Object.values(this.props.answer);
    //   const sorted = answerKeys.sort((a, b) => {
    //     return b.helpfulness - a.helpfulness
    //   })
    //   return sorted.map((answer, i) => (
    //     <Answer answer={answer.body} username={answer.answerer_name} date={answer.date} helpfulness={answer.helpfulness} key={i} />
    //     ))
    // }


    render() {
      const answerKeys = Object.values(this.props.answer);
      const nextTest = this.state.clickedTestTwo ? 'yellow' : null;
      // const loadingAll = this.state.loadAllClick ?
      const sorted = answerKeys.sort((a, b) => {
        return b.helpfulness - a.helpfulness
    })
    return (
      <div className="questions">
        <div id='qContainer'>
          <h4> Q: {this.props.question}</h4>
          <div className='helpfulLink' onClick={this.helpfulToggle}>Helpful&nbsp;<span className='yes'>Yes</span>({this.state.count})&nbsp;&nbsp;</div>
          <span className='divider'> | &nbsp;&nbsp; </span>
          <div className='addAnswerLink' onClick={this.addAnswer}>Add Answer{nextTest}</div>
        </div>
        {answerKeys.length <= 2
        ?
        sorted.map((answer, i) => (
          <Answer answer={answer.body} username={answer.answerer_name} date={answer.date} helpfulness={answer.helpfulness} key={i} />
          ))
          :
          this.loadTwo()}
      </div>
    );
  }
};

export default Question;
