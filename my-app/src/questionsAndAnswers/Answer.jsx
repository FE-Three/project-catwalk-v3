import React from 'react';
import Moment from 'react-moment';
import axios from 'axios';
import config from '../../config/config';
// import PropTypes from 'prop-types';
/* eslint-disable */
class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.helpfulness,
      helpfulClicked: false,
      reportClick: false,
      answerID: this.props.answerID
    };

    this.helpfulnessToggle = this.helpfulnessToggle.bind(this);
    this.reportToggle = this.reportToggle.bind(this);
  }

  helpfulnessToggle() {
    console.log('this is working with answerID: ', this.state.answerID)
    if (this.state.helpfulClicked === false) {
      this.setState({
        helpfulClicked: !this.state.helpfulClicked,
        count: this.state.count + 1,
      });
      axios({
        method: 'put',
        headers: {'Authorization': config.config},
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/answers/${this.state.answerID}/helpful`,
      })
    }
  }

  reportToggle() {
    this.setState({
      reportClick: !this.state.reportClick,
    });
    alert("Thank you. Your answer has been recorded 🗣");
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
            {!this.state.reportClick ? (
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
