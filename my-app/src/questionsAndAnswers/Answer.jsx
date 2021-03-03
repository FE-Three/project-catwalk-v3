import React from 'react';
import Moment from 'react-moment';
/* eslint-disable */

const Answer = (props) => {

  //console.log('ANSWER COMPONENT: ', props)

  return (
    <div>
      <p className='answers'>
        A:
        <span>&nbsp;</span>
        {props.answer}
      </p>
      <p className='userInfo'>
        by
        <span>&nbsp;</span>
        {props.username + ','}
        <span>&nbsp;</span>
        <Moment format='MMMM D, YYYY' date={props.date} />
        <span> &nbsp; &nbsp; &nbsp; &nbsp; |</span>
        <span> &nbsp; &nbsp; &nbsp; &nbsp; Helpful? Yes(#)</span>
        <span> &nbsp; &nbsp; &nbsp; &nbsp; |</span>
        <span> &nbsp; &nbsp; &nbsp; &nbsp; Report</span>
      </p>
    </div>
  );
}

export default Answer;
