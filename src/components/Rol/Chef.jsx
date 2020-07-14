import React, { Component } from 'react';
import backButton from "../../img/backButton.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Inicio from "../../components/Inicio"
import chefimg from "../../img/bannercocina.png";
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
				<img className="chefimg" alt="kitchen" src={chefimg} />
				<div className="container">
					<div className="row">
						<div className="col-sm">
							<p> <i class="fas fa-concierge-bell"></i> En Preparación</p>
							<div class="list-group">
                <button type="button" class="list-group-item list-group-item-action">Papas fritas</button>
                <button type="button" class="list-group-item list-group-item-action">Burger Queen</button>
                <button type="button" class="list-group-item list-group-item-action">Aritos de cebolla</button>
               
            </div>
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
