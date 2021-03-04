/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Route,
  Switch,
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
      <Switch>
        <Route exact path="/" children={<App paramID={'18201'} />} />
        <Route path="/item/:id" children={<Child />} />
      </Switch>
    </Router>,
  document.getElementById('root')
  );

  // function Child() {
  //   // We can use the `useParams` hook here to access
  //   // the dynamic pieces of the URL.
  //   let { id } = useParams()
  //   id ? id=id : id = '18021';
  //   return (
  //     <App paramID={id}/>
  //   );
  //   }