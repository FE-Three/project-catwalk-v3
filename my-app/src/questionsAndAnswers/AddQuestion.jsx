import React from 'react';
import axios from 'axios';
import AddQuestionModal from './AddQuestionModal';
import config from '../../config/config';
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
      headers: {'Authorization': config.config},
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/`,
      data: {
        body : question.questionBody,
        name: question.nicknameBody,
        email: question.emailBody,
        product_id: question.productID
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
