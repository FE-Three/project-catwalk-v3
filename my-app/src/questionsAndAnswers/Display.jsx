import React from 'react';
import Question from './Question';
/* eslint-disable */

const Display = (props) => {
  return (
    <div>
      {props.display
        ? props.display.slice(0, 4).map((result, i) => (
            <Question
              prodID={props.prodID}
              product={props.product}
              question={result.question_body}
              answer={result.answers}
              helpful={result.question_helpfulness}
              key={i}
            />
          ))
        : "Loading Questions..."}
      <br></br>
    </div>
  );
};

export default Display;
