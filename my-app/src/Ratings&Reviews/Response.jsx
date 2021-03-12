/* eslint-disable */
import React from 'react';

const Response = ({ response }) => {
  const statement = (
    <div className="response">
      <div>Response: </div>
      <div>{response}</div>
    </div>
  );
  if (response !== null && response !== '') {
    return <div>{statement}</div>;
  }
  return <React.Fragment></React.Fragment>;
};

export default Response;
