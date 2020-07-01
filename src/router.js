import React, { Component } from "react";


import chef from './components/Chef';
import Waiter from "./components/Waiter";




import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route path="/Waiters">
              <Waitress />
            </Route>
            <Route path="/Chef">
              <Cook />
              
            </Route>
          </Switch>
      </Router>
    );
  }
}

export default App;

