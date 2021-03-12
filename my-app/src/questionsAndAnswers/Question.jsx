import React from 'react';
import axios from 'axios';
import AddAnswerModal from './AddAnswerModal';
import Answer from './Answer';
import './App.css';
/* eslint-disable */

// axios.defaults.headers.common.authorization = config

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
    if (this.state.helpfulClicked === false) {
      this.setState({
        helpfulClicked: !this.state.helpfulClicked,
        count: this.state.count + 1,
      });
      axios({
        method: 'put',
        headers: {'Authorization': config.config},
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/${this.props.questionID}/helpful`,
      })
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
    axios({
      method: 'post',
      headers: {'Authorization': config.config},
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/${this.props.questionID}/answers`,
      data: {
        body : answer.answerBody,
        name: answer.nicknameBody,
        email: answer.emailBody,
      }
    })
      .then(res => {
      console.log('POSTED!')
    })
      .catch(err => console.log('ERROR POSTING: ', err))

    // this.setState({
    //   data: [...this.state.data, answer]
    // })
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
