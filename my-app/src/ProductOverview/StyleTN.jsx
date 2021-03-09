/* eslint-disable */
import React from 'react';
import axios from 'axios';

class StyleTN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  componentDidMount() {


  }




  render() {
    //console.log(this.props.styleNum)
    return (

      <div className={`TN${this.props.styleNum}`}>
        <img className="TN" onClick={this.props.onClick} src={this.props.styleOption.photos[0].thumbnail_url} />
      </div>

    )
  }
}

export default StyleTN;