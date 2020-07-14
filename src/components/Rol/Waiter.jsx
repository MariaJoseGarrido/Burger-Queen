import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import waitress from "../../img/bannerGarzon.png";
import "../Rol/waiter.css";
import DateComponent from "../DateComponent";
import backButton from "../../img/backButton.png";
import Inicio from "../Inicio";
import Menu from "../../components/NuevoMenu";
import Cliente from "./Cliente"

class welcomeWaiter extends Component {
  backButton = () => {
    console.log("clicked back button");
    return (
      <Router>
        <Route exact path="/Waiter">
          <Inicio />
        </Route>
      </Router>
    );
  };
  render() {
    return (
      <Fragment>
        <div className="WaiterDiv">
          <Link to="/inicio">
            <img
              onClick={() => this.backButton()}
              alt="backButton"
              src={backButton}
              className="backButton"
            />
          </Link>
        </div>
        <DateComponent />

        <div className="container-custom">
          <div className="logo">
            <img className="waitress" alt="waitress" src={waitress} />
            <h1 className="title-custom">Toma de órdenes</h1>
              <Cliente/>
          </div>
        </div>

        <Menu />
      </Fragment>
    );
  }
}

export default welcomeWaiter;
