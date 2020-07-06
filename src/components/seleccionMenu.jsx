import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import burgerlogo from "../img/burgerlogo.png";
import "../components/inicio.css";
import DateComponent from "./DateComponent"

class horario extends Component {
  render() {
    return (
      <Fragment>
        <DateComponent />           
          <div className="container-custom">
            <div className="logo">
              <img className="burgerHome" alt="burgerlogo" src={burgerlogo} />	
              <h1 className="title-custom">Selecciona ...</h1>
              <div>
                <div className='button-welcome'>
                  <Link to="/Menudesayuno"><Button  title="Desayuno" /></Link>
                </div>
                <div className='button-welcome'>
                  <Link to="/Menualmuerzo"><Button className="button" title="Almuerzo/Cena" /></Link>
                </div>
              </div>
            </div>
          </div>
      </Fragment>
    );
  }
}

export default horario;