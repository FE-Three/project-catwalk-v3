import React from 'react';
/* eslint-disable */

class MoreAnsweredQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <button className='moreAnsweredQuestionsButton' onClick={this.props.loadAnswers}>MORE ANSWERED QUESTIONS</button>
      </div>
    )
  }
}

export default MoreAnsweredQuestions;