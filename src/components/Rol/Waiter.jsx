import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button";
import waitress from "../../img/waitress.jpeg";
import "../Rol/waiter.css"
import DateComponent from "../DateComponent"

class welcomeWaiter extends Component {
  render() {
    return (
      <Fragment>
        <DateComponent />
          
          <div className="container-custom">
            <div className="logo">
              <img className="waitress" alt="waitress" src={waitress} />	
              <h1 className="title-custom">¿Qué servicio vas a prestar?</h1>
              <div>
                <div className='button-welcome'>
                  <Link to="/Menudesayuno"><Button  title="Desayuno" /></Link>
                </div>
                <div className='button-welcome'>
                  <Link to="/Menualmuerzo"><Button className="button" title="Almuerzo" /></Link>
                </div>
              </div>
            </div>
          </div>
      </Fragment>
    );
  }
}

export default welcomeWaiter;

