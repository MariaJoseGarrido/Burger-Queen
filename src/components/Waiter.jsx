import React, { Component } from 'react';
import backButton from "../img/backButton.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Inicio from "../components/Inicio";
class Waiter extends Component {

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
			<div className="WaiterDiv">
				<Link to="/">
					<img
						onClick={() => this.backButton()}
						alt="backButton"
						src={backButton}
						className="backButton"
					/>
				</Link>
			</div>
		);
	}
}


export default Waiter;
