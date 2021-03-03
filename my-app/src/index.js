/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Route,
  useParams
  } from "react-router-dom";
  function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  return (
  <App paramID={id}/>
  );
  }


  ReactDOM.render(
    <Router>
      <Route path="/item/:id" children={<Child />} />
    </Router>,
  document.getElementById('root')
  );