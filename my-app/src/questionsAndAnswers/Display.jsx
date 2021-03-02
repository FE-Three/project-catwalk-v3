import React from 'react';
import Question from './Question';
/* eslint-disable */

const Display = (props) => {

  console.log('DISPLAY COMPONENT: ', props.display)

  return (
    <div>
      {props.display.results
        ? props.display.results.map((result, i) => (
            <Question
              question={result.question_body}
              answer={result.answers}
              key={i}
            />
          ))
        : "Loading Questions..."}
      <br></br>
      {/* {props.display.results
        ? props.display.results.map((answer, i) => (
            <QA answer={answer.answers.body} key={i} />
          ))
        : "Loading Answers..."} */}
    </div>
  );
};

export default Display;
