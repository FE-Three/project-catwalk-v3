import React from 'react';
/* eslint-disable */

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addQuestions() {
    console.log('Add Question Button Works!')
  }

  render() {
    return (
      <div>
        <button onClick={this.addQuestions}>ADD A QUESTION +</button>
      </div>
    );
  }
}

export default AddQuestion;
