import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Route, Switch, BrowserRouter as Router, Link} from "react-router-dom";
import Login from "./pages/login/login";
import Cubic from "./pages/cubic/cubic";
import MouseOver from "./pages/mouseOver/mouseOver";
import Earbuds from "./pages/earbuds/earbuds";

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
      <div style={{overflow: "hidden", position: "fixed", top: "10px", textAlign: "left", width: "100%", zIndex: "100"}}>
          <Link style={style} to="/">Random</Link>
          <Link style={style} to="/login">Login</Link>
          <Link style={style} to="/cubic">Cubic</Link>
          <Link style={style} to="/mouseover">MouseOver</Link>
          <Link style={style} to="/earbuds">Earbuds</Link>
      </div>
      <Switch>
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/cubic">
              <Cubic />
          </Route>
          <Route path="/mouseover">
              <MouseOver />
          </Route>
          <Route path="/earbuds">
              <Earbuds />
          </Route>
          <Route path="/">
              <App />
          </Route>
      </Switch>
</Router>,
  document.getElementById('root')
);
