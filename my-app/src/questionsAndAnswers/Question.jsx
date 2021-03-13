import React from 'react';
import axios from 'axios';
import AddAnswerModal from './AddAnswerModal';
import Answer from './Answer';
import './App.css';
/* eslint-disable */

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.helpful,
      helpfulClicked: false,
      loadAllClick: false,
      showModal: false,
      data: []
    };
    this.helpfulToggle = this.helpfulToggle.bind(this);
    this.loadTwo = this.loadTwo.bind(this);
    this.loadAll = this.loadAll.bind(this);
    this.selectModal = this.selectModal.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
  }

  helpfulToggle() {
    // console.log('this is working with: ', this.props.questionID)
    if (this.state.helpfulClicked === false) {
      this.setState({
        helpfulClicked: !this.state.helpfulClicked,
        count: this.state.count + 1,
      });
      axios.put(`/qa/questions/${this.props.questionID}/helpful`)
    }
  }

  loadTwo() {
    const answerKeys = Object.values(this.props.answer);
    const sorted = answerKeys.sort((a, b) => {
      return b.helpfulness - a.helpfulness;
    });
    if (this.state.loadAllClick === false) {
      return (
        <div>
          {sorted.slice(0, 2).map((answer, i) => {
            return (
              <Answer
                answer={answer.body}
                answerID={answer.id}
                username={answer.answerer_name}
                date={answer.date}
                helpfulness={answer.helpfulness}
                key={i}
              />
            );
          })}
          <button className="collapseButton" onClick={() => this.loadAll()}>
            Load more answers
          </button>
        </div>
      );
    } else {
      return (
        <div>
          {sorted.map((answer, i) => {
            return (
              <Answer
                answer={answer.body}
                answerID={answer.id}
                username={answer.answerer_name}
                date={answer.date}
                helpfulness={answer.helpfulness}
                key={i}
              />
            );
          })}
          <button className="collapseButton" onClick={() => this.loadAll()}>
            Collapse answers
          </button>
        </div>
      );
    }
  }

  loadAll() {
    this.setState({
      loadAllClick: !this.state.loadAllClick,
    });
  }

  selectModal() {
    this.setState({
      showModal: !this.state.showModal,
     });
  }

  addAnswer(answer) {
    console.log('answer: ', answer)
    axios({
      method: 'post',
      url: `/qa/questions/answers`,
      data: {
        question_id: answer.question_id,
        body : answer.body,
        name: answer.name,
        email: answer.email,
      }
    })
      .then(res => {
        console.log('answer posted!')
        this.props.renderQASection();
    })
      .catch(err => console.log('ERROR POSTING: ', err))
  }


  render() {
    const answerKeys = Object.values(this.props.answer);
    const sorted = answerKeys.sort((a, b) => {
      return b.helpfulness - a.helpfulness;
    });
    return (
      <div className="questions">
        <div id="qContainer">
          <h4> Q: {this.props.question}</h4>
          <div className="helpfulLink">
            Helpful&nbsp;
            <span className="yes" onClick={this.helpfulToggle}>
              Yes
            </span>
            ({this.state.count})&nbsp;&nbsp;
          </div>
          <span className="divider"> | &nbsp;&nbsp; </span>
          <div className="addAnswerLink" onClick={() => this.selectModal()}>
            Add Answer
            <AddAnswerModal
              questionID={this.props.questionID}
              addAnswer={this.addAnswer}
              question={this.props.question}
              prodID={this.props.prodID}
              displayModal={this.state.showModal}
              product={this.props.product}
              closeModal={this.selectModal}
            />
          </div>
        </div>
        {answerKeys.length <= 2
          ? sorted.map((answer, i) => (
              <Answer
                reported={answer.reported}
                answer={answer.body}
                answerID={answer.id}
                username={answer.answerer_name}
                date={answer.date}
                helpfulness={answer.helpfulness}
                key={i}
                photos={answer.photos}
              />
            ))
          : this.loadTwo()}
      </div>
    );
  }
}

export default Question;
