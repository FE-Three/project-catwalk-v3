import React from 'react';
import Moment from 'react-moment';
import axios from 'axios';
// import PropTypes from 'prop-types';
/* eslint-disable */
class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.helpfulness,
      helpfulClicked: false,
      answerID: this.props.answerID,
      reported: false
    };

    this.helpfulnessToggle = this.helpfulnessToggle.bind(this);
    this.reportToggle = this.reportToggle.bind(this);
  }

  helpfulnessToggle() {
    // console.log('this is working with answerID: ', this.state.answerID)
    if (this.state.helpfulClicked === false) {
      this.setState({
        helpfulClicked: !this.state.helpfulClicked,
        count: this.state.count + 1,
      });
      axios.put(`/qa/answers/${this.state.answerID}/helpful`)
    }
  }

  reportToggle() {
    // console.log('CLICKING AT: ', this.state.answerID)
    axios.put(`/qa/answers/${this.state.answerID}/report`)
      .then(() => {
        this.setState({
          reported: !this.state.reported,
        });
      })
      .catch(err => console.log('ERROR WITH: ', err))
  }

  render() {
    return (
      <div>
        <p className="answers">A: &nbsp; {this.props.answer}</p>
        {this.props.photos
          ? this.props.photos.map((photo, i) => (
              <img
                src={photo}
                width={78}
                height={78}
                key={i}
                thumbnail="true"
              ></img>
            ))
          : null}
        <div id="aContainer">
          <p className="userInfo">
            {this.props.username === "Seller" ? (
              <strong>{this.props.username + ", "}</strong>
            ) : (
              <>{this.props.username + ", "}</>
            )}
            <Moment
              className="date"
              format="MMMM D, YYYY"
              date={this.props.date}
            />{" "}
            &nbsp;
            <span className="dividerOne"> &nbsp; | &nbsp; </span>
            <span className="answerHelpful">
              Helpful?{" "}
              <span className="yes" onClick={this.helpfulnessToggle}>
                Yes
              </span>
              ({this.state.count}) &nbsp;{" "}
            </span>
            <span className="dividerTwo"> &nbsp; | &nbsp; </span>
            {!this.state.reported ? (
              <span className="report">
                {" "}
                &nbsp;{" "}
                <span onClick={this.reportToggle} className="reportText">
                  Report
                </span>{" "}
                &nbsp;{" "}
              </span>
            ) : (
              "Reported"
            )}
          </p>
        </div>
      </div>
    );
  }
}

export default Answer;
