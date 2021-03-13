import React from 'react';
/* eslint-disable */
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class MoreAnsweredQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <Button
         variant="outline-primary"
         type="button"
          className='moreAnsweredQuestionsButton MoreReviews btn btn-outline-primary'
          onClick={this.props.loadAnswers}>MORE ANSWERED QUESTIONS
        </Button>
      </div>
    )
  }
}

export default MoreAnsweredQuestions;

