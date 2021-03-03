import React from 'react';
import Question from './Question';
/* eslint-disable */

const Display = (props) => {

  // console.log('DISPLAY: ', props.display.results)
  return (
  <div>
    {props.display.results
      ? props.display.results.map((result, i) => (
        <Question question={result.question_body} answer={result.answers} helpful={result.question_helpfulness} updateNum={props.updateNum} key={i} />
      ))
      : 'Loading Questions...'}
    <br></br>
  </div>
  )
};

export default Display;
