import React, { Component } from 'react';
import backButton from "../../img/backButton.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Inicio from "../../components/Inicio"
import "../Rol/chef.css"

class Chef extends Component {

	backButton = () => { 
		console.log('clicked back button')   
		return(
		<Router>
		  <Route exact path="/">
			  <Inicio />
		  </Route>
		</Router>
		);
	   
	  };

	render() {
		return (
			<div className="ChefDiv">
				<Link to="/">
					<img
						onClick={() => this.backButton()}
						alt="backButton"
						src={backButton}
						className="backButton"
					/>
				</Link>

				<div className="container">
					<div className="row">
						<div className="col-sm">
							<p> <i class="fas fa-concierge-bell"></i> En Preparación</p>
						</div>
						<div className="col-sm">
							<p> <i class="fas fa-hamburger"></i> Listos para servir</p>
						</div>
					</div>
				</div>

			</div>
		);
	}
}


export default Chef;
