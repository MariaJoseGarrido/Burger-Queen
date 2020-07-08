import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from "../../components/button";
import waitress from "../../img/waitress.jpeg";
import "../Rol/waiter.css"
import DateComponent from "../DateComponent"
import backButton from "../../img/backButton.png"
import Inicio from "../Inicio"

class welcomeWaiter extends Component {
  backButton = () => { 
		console.log('clicked back button')   
		return(
		<Router>
		  <Route exact path="/Waiter">
			  <Inicio />
		  </Route>
		</Router>
		);
    }
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

