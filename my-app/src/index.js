/* eslint-disable */
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useParams
  } from "react-router-dom";

  function Child(props) {
    // We can use the `useParams` hook here to access the dynamic pieces of the URL.
    const { id } = useParams();
    const [endPoint, setEndPoint] = useState({id: id, redirect: false});

    const productSelect = (e) => {
      document.removeEventListener("keydown", productSelect, false);
      if (e.keyCode ===  37) {
        setEndPoint({id: ((Number(endPoint.id) - 1).toString()), redirect: true});

      } else if (e.keyCode === 39) {
        setEndPoint({id: ((Number(endPoint.id) + 1).toString()), redirect: true});
      }
    }

    useEffect(() => {
      //probably adding too many listeners and not unsubscribing them?  Though the error is actually with the above
      document.addEventListener("keydown", productSelect, false);
    })

    let conditionalRender = ()=> {
      if (endPoint.redirect) {
        return (<Redirect to={`/${endPoint.id}`} />);
      } else {
        return (<App id={id} />);
      }
    }

    return (
      <React.Fragment>
        {conditionalRender()}
      </React.Fragment>
    );
  }



  ReactDOM.render(
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to={"/18201"} />
        </Route>
        <Route path="/item/:id" render={(path)=> (<Child key={path.match.params.id}/>)} />
        <Route path="/:id" render={(path)=> (<Child key={path.match.params.id}/>)} />
      </Switch>
    </Router>,
  document.getElementById('root')
  );
