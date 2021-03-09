import React from 'react';
import AddQuestionModal from './AddQuestionModal';
import './App.css';
/* eslint-disable */
class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.selectModal = this.selectModal.bind(this);
  }

  selectModal() {
    this.setState({
      showModal: !this.state.showModal,
     });
  }

  render() {
    return (
      <div>
        <button className="addQuestionButton" onClick={ () => this.selectModal() }> ADD A QUESTION +
        </button>
        <AddQuestionModal
          displayModal={this.state.showModal}
          product={this.props.product}
          closeModal={this.selectModal}/>
      </div>
    )
  }
}

export default AddQuestion;
