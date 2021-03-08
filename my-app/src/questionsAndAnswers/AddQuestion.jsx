import React from 'react';
import Modal from './Modal';
import './App.css';
/* eslint-disable */
class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalInfo: ''
    };
    this.selectModal = this.selectModal.bind(this);
  }

  selectModal(info) {
    this.setState({
      showModal: !this.state.showModal,
      modalInfo: info
     });
  }

  render() {
    return (
      <div>
      <button className="addQuestionButton" onClick={ () => this.selectModal('Modal B') }> ADD A QUESTION +
      </button>
      <Modal
        displayModal={this.state.showModal}
        modalInfo={this.state.modalInfo}
        closeModal={this.selectModal}/>
  </div>
    );
  }
}

export default AddQuestion;
