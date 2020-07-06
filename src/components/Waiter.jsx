import React, { Component, Fragment } from 'react';
// import backButton from "../img/backButton.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Inicio from "../components/Inicio";
import Menudesayuno from "../components/Menudesayuno";
import Menualmuerzo from "../components/Menualmuerzo";
import DateComponent from "./DateComponent";
import "../components/inicio.css";
import Button from "../components/button";
import burgerlogo from "../img/burgerlogo.png";
// import Cliente  from "../components/Cliente";


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
                  <Link to="/Menudesayuno"><Button  title="Desayuno"/> </Link>
									
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

// class Waiter extends Component {

// 	backButton = () => { 
// 		console.log('clicked back button')   
// 		return(
// 		<Router>
// 		  <Route exact path="/">
// 			  <Inicio />
// 		  </Route>
// 		</Router>
// 		);
	   
// 	  };

// 	render() {
// 		return (
// 			<div className="WaiterDiv">
// 				<Link to="/">
// 					<img
// 						onClick={() => this.backButton()}
// 						alt="backButton"
// 						src={backButton}
// 						className="backButton"
// 					/>
// 				</Link> 
// 				<Cliente />  
//                 <Menudesayuno />
// 				<Menualmuerzo />
// 			</div>

// 		);
// 	}
// }


// export default Waiter;
