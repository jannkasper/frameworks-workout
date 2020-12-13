import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Route, Switch, BrowserRouter as Router, Link} from "react-router-dom";
import Login from "./pages/login/login";

const style = {
    position: "relative",
    color: "#3ed76b",
    margin: "30px",
    zIndex: "10",
    textDecoration: "none",
    "&:hover": {
        color: "blue"
    }
}

ReactDOM.render(
  <Router>
      <div style={{position: "absolute"}}>
          <Link style={style} to="/">Random</Link>
          <Link style={style} to="/login">Login</Link>
      </div>
      <Switch>
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/">
              <App />
          </Route>
      </Switch>
</Router>,
  document.getElementById('root')
);
