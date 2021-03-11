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
    let conditionalRender = () => {
      if(this.props.styleNum === this.props.selectedStyle) {
        return (
          <div className={`TN${this.props.styleNum}`}>
            <i className="overlap far fa-check-circle"></i>
            <img className="TN" onClick={this.props.onClick} src={this.props.styleOption.photos[0].thumbnail_url} />
          </div>
        )
      } else {
        return (
          <div className={`TN${this.props.styleNum}`}>
          <img className="TN" onClick={this.props.onClick} src={this.props.styleOption.photos[0].thumbnail_url} />
          </div>
        )
      }
    }
    return (
      <React.Fragment>
        {conditionalRender()}
      </React.Fragment>
    )
  }
}

export default StyleTN;