/* eslint-disable */
import React from "react";
import axios from "axios";

class AddAnswerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charsLeft: 1000,
      maxChar: 1000,
      charsLeftEmail: 60,
      maxCharEmail: 60,
      charsLeftNickname: 60,
      maxCharNickname: 60,
      answerBody: this.props.answerBody,
      emailBody: this.props.emailBody,
      nicknameBody: this.props.nicknameBody,
      question_id: this.props.questionID
    };
    this.handleWordCountQuestionBody = this.handleWordCountAnswerBody.bind(this);
    this.handleWordCountEmail = this.handleWordCountEmail.bind(this);
    this.handleWordCountNickname = this.handleWordCountNickname.bind(this);
    this.handleWordCountButton = this.handleWordCountButton.bind(this);
    this.handleWordCountUpload = this.handleWordCountUpload.bind(this);
    this.displayInfo = this.displayInfo.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleWordCountAnswerBody(event) {
    const charCount = event.target.value.length;
    const maxChar = this.state.maxChar;
    const charLength = maxChar - charCount;
    this.setState({ charsLeft: charLength,
      answerBody: event.target.value });
  }

  handleWordCountEmail(event) {
    const charsLeftEmail = event.target.value.length;
    const maxCharEmail = this.state.maxCharEmail;
    const charLength = maxCharEmail - charsLeftEmail;
    this.setState({ charsLeftEmail: charLength,
      emailBody: event.target.value });
  }

  handleWordCountNickname(event) {
    const charsLeftNickname = event.target.value.length;
    const maxCharNickname = this.state.maxCharNickname;
    const charLength = maxCharNickname - charsLeftNickname;
    this.setState({ charsLeftNickname: charLength,
      nicknameBody: event.target.value });
  }

  handleWordCountButton() {
    event.preventDefault();
    this.props.addAnswer({
      question_id: this.state.question_id,
      body: this.state.answerBody,
      name: this.state.nicknameBody,
      email: this.state.emailBody
    })
  }

  handleWordCountUpload(event) {
    event.preventDefault();
    console.log('upload button is working')
  }

  displayInfo() {
    return (
      <form onSubmit={this.handleWordCountButton}>
        <div className="title">Submit your Answer</div>
        <br></br>
        <div className="product">{this.props.product}: {this.props.question}</div>
        <br></br>
        <br></br>
        <textarea
          className="modalBody"
          placeholder="submit answer here..."
          rows={6}
          columns={10}
          type="text"
          maxLength="1000"
          required
          onChange={this.handleWordCountQuestionBody}
          />
          <p className='firstLimit'>Limit: {this.state.charsLeft}</p>
        <div id='emailAndUsername'>
        <label className='addEmail'>
          *Add Email &nbsp;
          </label>
          <input
            className="modalEmail"
            placeholder="Example: jack@email.com"
            type="text"
            maxLength="60"
            required
            onChange={this.handleWordCountEmail}
          ></input>
          <p className='nextLimit'>Limit: {this.state.charsLeftEmail}</p>
        <label className='addEmailAuthentication'>
          **For authentication reasons, you will not be emailed**
        </label>
        <label className='addNickname'>
          *Add Nickname &nbsp;
          </label>
          <input
            className="modalNickname"
            placeholder="Example: jack543!"
            type="text"
            maxLength="60"
            required
            onChange={this.handleWordCountNickname}
          ></input>
          <p className='lastLimit'>Limit: {this.state.charsLeftNickname}</p>
        <label className='addNicknameAuthentication'>
        **For privacy reasons, do not use your full name or email address**
        </label>
        </div>
        <br></br>
        <br></br>
        <button className ='uploadPhotoButton' onClick={this.handleWordCountUpload}>Upload Photos</button>
        <br></br>
        <br></br>
        <button className='submitButton' onClick={this.handleWordCountButton}>Submit</button>
      </form>
    );
  }

  closeModal(e) {
    e.stopPropagation();
    this.props.closeModal();
  }

  render() {
    const divStyle = {
      display: this.props.displayModal ? "block" : "none",
    };
    return (
      <div className="graham-modal" onClick={this.closeModal} style={divStyle}>
        <div className="graham-modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="graham-close" onClick={this.closeModal}>
            &times;
          </span>
          <div className="graham-modal-flex">{this.displayInfo()}</div>
        </div>
      </div>
    );
  }
}

export default AddAnswerModal;
