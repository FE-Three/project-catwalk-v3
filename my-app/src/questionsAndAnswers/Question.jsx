import React from 'react';
import Answer from './Answer';
/* eslint-disable */

const Question = (props) => {
  const answerKeys = Object.values(props.answer);

  console.log('QUESTION COMPONENT: ', answerKeys)

  return (
    <div className="questions">
      <h4> Q: {props.question}<span className='addedLinks'>Helpful? Yes(#) &nbsp; &nbsp; | &nbsp; &nbsp; Add Answer</span></h4>
      {answerKeys.map((answer, i) => (
        <Answer answer={answer.body} username={answer.answerer_name} date={answer.date} key={i} />
      ))}
    </div>
  );
};

export default Question;
