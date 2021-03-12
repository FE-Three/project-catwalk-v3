import React from 'react';
import Question from './Question';
/* eslint-disable */

const Display = (props) => {
  return (
    <div>
      {props.display
        ? (props.clicked === false ?
          props.display.slice(0, 4).map((result, i) => (
              <Question
                reported={result.reported}
                renderQASection={props.renderAll}
                questionID={result.question_id}
                prodID={props.prodID}
                product={props.product}
                question={result.question_body}
                answer={result.answers}
                helpful={result.question_helpfulness}
                key={i}
              />
            ))
         :
        props.display.map((result, i) => (
          <Question
            reported={result.reported}
            renderQASection={props.renderAll}
            questionID={props.question_id}
            prodID={props.prodID}
            product={props.product}
            question={result.question_body}
            answer={result.answers}
            helpful={result.question_helpfulness}
            key={i}
          />
        )))
        : "Loading Questions..."}
      <br></br>
    </div>
  );
};

export default Display;
