import React from 'react';

class SearchForAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    this.props.searchAnswers(this.state);
    this.setState({name: ''})
  }

  handleSearchChange(event) {
    this.setState({[event.target.name] : event.target.value})
  }

  render() {
    return (

      <div>
        <form onSubmit={this.handleSearchSubmit}>
          <label>
            <input name="name" onChange={this.handleSearchChange} value={this.state.name} placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...' style={{width: '500px'}}></input>
          </label>

        <button>Go</button>
        </form>
      </div>
    )
  }

}

export default SearchForAnswers;