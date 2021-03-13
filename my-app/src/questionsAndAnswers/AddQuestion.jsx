import React from 'react';
import axios from 'axios';
import AddQuestionModal from './AddQuestionModal';
import './App.css';
/* eslint-disable */
class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      product: this.props.fullProduct.id
    };
    this.selectModal = this.selectModal.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
  }

  selectModal() {
    this.setState({
      showModal: !this.state.showModal,
     });
  }

  addQuestion(question) {
    console.log('question: ', question)
    axios({
      method: 'post',
      url: `/qa/questions`,
      data: question
    })
      .then(res => {
        this.props.renderQASection()
        console.log('response: ', res.status)
    })
      .catch(err => console.log('ERROR POSTING: ', err.response.status))
  }

  render() {
    return (
      <div>
        <button className="addQuestionButton" onClick={ () => this.selectModal() }> ADD A QUESTION +
        </button>
        <AddQuestionModal
          addQuestion={this.addQuestion}
          displayModal={this.state.showModal}
          fullProduct={this.props.fullProduct.id}
          product={this.props.product}
          body={this.props.question_body}
          closeModal={this.selectModal}/>
      </div>
    )
  }
}

export default AddQuestion;
