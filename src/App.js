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
        <h1>TODO MAL!</h1>
          <div className="btn-group">
            <NavLink to="/" className="btn btn-dark" activeClassName="active"> 
            Inicio 
            </NavLink>
            <NavLink to="/Waiter" className="btn btn-dark">  
            Garzón
            </NavLink>
            <NavLink to="/Chef" className="btn btn-dark"> 
            Chef
            </NavLink>
          </div>
        <hr />
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
            Esta es la página de inicio
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;


