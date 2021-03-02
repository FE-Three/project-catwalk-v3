import React from 'react';
/* eslint-disable */

const Answer = (props) => {

  console.log('ANSWER COMPONENT: ', props)

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
        {props.date.slice(5, 8)}
        {props.date.slice(8, 10) + '-'}
        {props.date.slice(0, 4)}
        <span> &nbsp; &nbsp; &nbsp; &nbsp; |</span>
        <span> &nbsp; &nbsp; &nbsp; &nbsp; Helpful? Yes(#)</span>
        <span> &nbsp; &nbsp; &nbsp; &nbsp; |</span>
        <span> &nbsp; &nbsp; &nbsp; &nbsp; Report</span>
      </p>
    </div>
  );
}

export default Answer;
