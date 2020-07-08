import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Inicio';
import Waiter from "./components/Rol/Waiter";
import Chef from "./components/Rol/Chef";
import Menudesayuno from "./components/Menus/Menudesayuno";
import Menualmuerzo from "./components/Menus/Menualmuerzo";
import Formulario from "./components/Formulario"


function App () {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/Waiter">
            <Waiter/>    
          </Route>

          <Route path="/Menudesayuno">
            <Menudesayuno />
          </Route>
          <Route path="/Menualmuerzo">
            <Menualmuerzo />
          </Route>

          <Route path="/Chef">
            <Chef/>
          </Route>

          <Route path="/Formulario">
            <Formulario />
            Esta es la página de formulario
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

