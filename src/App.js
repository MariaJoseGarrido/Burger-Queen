import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Inicio';
import Waiter from "./components/Waiter";
import Chef from "./components/Chef";
import Menudesayuno from "./components/Menudesayuno";


function App () {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/Waiter">
            <Waiter/>
            </Route>

          <Route path="/Menudesayuno>">
            <Menudesayuno/>
          </Route>

          <Route path="/Chef">
            <Chef/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;


