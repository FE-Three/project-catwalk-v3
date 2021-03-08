import React from 'react';
import SearchBar from 'material-ui-search-bar';
/* eslint-disable */

class SearchForAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    let firstAnswer;
    const questionArr = this.props.data.results.filter((question, i) => {
      return question.question_body.toLowerCase().includes(this.state.value.toLowerCase())
    })
    this.props.data.results.forEach((answer, i) => {
      firstAnswer = Object.values(answer.answers)
      })
      const secondAnswer = firstAnswer.filter((one, i) => {
         return one.body.toLowerCase().includes(this.state.value.toLowerCase())
      })

      // console.log('secondAnswer: ', secondAnswer)
      // console.log('questionArr: ', questionArr)

    this.props.searchAnswers(questionArr)
    // this.setState({value: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSearchSubmit}>
          <SearchBar
            value={this.state.value}
            className="inputBar"
            onChange={(newValue) => this.setState({ value: newValue })}
            placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          />
        </form>
      </div>
    );
  }
}

export default SearchForAnswers;
