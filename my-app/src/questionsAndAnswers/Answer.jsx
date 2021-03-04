import React from 'react';
import Moment from 'react-moment';
/* eslint-disable */

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.helpfulness,
      helpfulClicked: false,
      reportClick: false
    };

    this.helpfulnessToggle = this.helpfulnessToggle.bind(this);
    this.reportToggle = this.reportToggle.bind(this);
  }

  helpfulnessToggle() {
    if (this.state.helpfulClicked === false) {
      this.setState({
        helpfulClicked: !this.state.helpfulClicked,
        count: this.state.count + 1
      });
    } else {
      this.setState({
        helpfulClicked: !this.state.helpfulClicked,
        count: this.state.count - 1
      })
    }
  }

  reportToggle() {
    this.setState({
      reportClick: !this.state.reportClick
    })
    alert('Thank you. Your answer has been recorded 🗣')
  }

  render() {
    console.log('answers: ', this.props.answer);
    return (
      <div>
      <p className='answers'>
        A: &nbsp; {this.props.answer}
      </p>
        <div id='aContainer'>
          <p className='userInfo'>
            by {this.props.username + ','} &nbsp;
            <Moment className='date' format='MMMM D, YYYY' date={this.props.date} /> &nbsp;
            <span className='dividerOne'> &nbsp; | &nbsp; </span>
            <span className='answerHelpful' onClick={this.helpfulnessToggle}>Helpful? <span className='yes'>Yes</span>({this.state.count}) &nbsp; </span>
            <span className='dividerTwo'> &nbsp; | &nbsp; </span>
            {!this.state.reportClick ?
            <span className='report'> &nbsp; <span onClick={this.reportToggle} className='reportText'>Report</span> &nbsp; </span>
            : 'Reported'}
          </p>
        </div>
    </div>
    )
  };
}

export default Answer;
