import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Home from './components/Inicio';
import Waiter from "./components/Waiter";
import Chef from "./components/Chef";


function App () {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/Waiter">
            <Waiter/>
          
            Esta es la página de meseros
          </Route>
          <Route path="/Chef">
            <Chef/>
            Esta es la página de chef
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


