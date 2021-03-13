/* eslint-disable */
import React from "react";
import axios from "axios";

class AddQuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charsLeft: 1000,
      maxChar: 1000,
      charsLeftEmail: 60,
      maxCharEmail: 60,
      charsLeftNickname: 60,
      maxCharNickname: 60,
      questionBody: this.props.questionBody,
      emailBody: this.props.emailBody,
      nicknameBody: this.props.nicknameBody,
      productID: this.props.fullProduct
    };
    this.handleWordCountQuestionBody = this.handleWordCountQuestionBody.bind(this);
    this.handleWordCountEmail = this.handleWordCountEmail.bind(this);
    this.handleWordCountNickname = this.handleWordCountNickname.bind(this);
    this.handleWordCountButton = this.handleWordCountButton.bind(this);
    this.handleWordCountUpload = this.handleWordCountUpload.bind(this);
    this.displayInfo = this.displayInfo.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.fullProduct !== prevProps.fullProduct) {
      this.setState({
        productID: this.props.fullProduct
      })
    }
  }


  handleWordCountQuestionBody(event) {
    const charCount = event.target.value.length;
    const maxChar = this.state.maxChar;
    const charLength = maxChar - charCount;
    this.setState({ charsLeft: charLength, questionBody: event.target.value });
  }

  handleWordCountEmail(event) {
    const charsLeftEmail = event.target.value.length;
    const maxCharEmail = this.state.maxCharEmail;
    const charLength = maxCharEmail - charsLeftEmail;
    this.setState({
      charsLeftEmail: charLength,
      emailBody: event.target.value,
    });
  }

  handleWordCountNickname(event) {
    const charsLeftNickname = event.target.value.length;
    const maxCharNickname = this.state.maxCharNickname;
    const charLength = maxCharNickname - charsLeftNickname;
    this.setState({
      charsLeftNickname: charLength,
      nicknameBody: event.target.value,
    });
  }

  handleWordCountButton() {
    event.preventDefault();
    this.props.addQuestion({
      body: this.state.questionBody,
      name: this.state.nicknameBody,
      email: this.state.emailBody,
      product_id: this.props.fullProduct
    })
  }

  handleWordCountUpload(event) {
    event.preventDefault();
    console.log("upload button is working");
  }

  displayInfo() {
    return (
      <form onSubmit={this.handleWordCountButton}>
        <div className="title">Ask Your Question</div>
        <br></br>
        <div className="product">About the {this.props.product}</div>
        <br></br>
        <textarea
          className="modalBody"
          placeholder="Add Question Here..."
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
        <label className='addEmailAuthentication'>**For authentication reasons, you will not be emailed**</label>
        <label className='addNickname'>
          *Add Nickname &nbsp;
          </label>
          <input
            className="modalNickname"
            placeholder="Example: jackson11!"
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
      <div>
        <div className="modal" onClick={this.closeModal} style={divStyle}>
          <div className="graham-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={this.closeModal}>
              &times;
            </span>
            <div className="modal-flex">{this.displayInfo()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddQuestionModal;
