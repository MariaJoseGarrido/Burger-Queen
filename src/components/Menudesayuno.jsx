import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import backButton from "../img/backButton.png";
import "../components/Menu.css"
import jamonqueso from "../img/jamonqueso.jpeg";
import americano from "../img/americano.jpeg";
import croissant from "../img/croissant.jpeg";
import latte from "../img/latte.jpeg"
import muffin from "../img/muffin.jpeg"
import jugo from "../img/jugo.jpeg"
import Cliente from "../components/Cliente";
import Waiter from "../components/Waiter";
import "../components/Cliente.css";

class Menudesayuno extends Component {
    backButton = () => { 
		console.log('clicked back button')   
		return(
		<Router>
		  <Route exact path="/Waiter">
			  <Waiter />
		  </Route>
		</Router>
		);
	   
	  };
    render () {
        return (
            <React.Fragment>
                  <div className="WaiterDiv">
				<Link to="/Waiter">
                    <img 
                        onClick={() => this.backButton()}
						alt="backButton"
						src={backButton}
						className="backButton"
					/>
                   
				</Link> 
				<Cliente />  
                
			</div>
            <div class="container-sm">
                <div className="title">
                    <div>Para Comer</div>
                    <div>Para Beber</div>
                </div>
                <div class="row">
                    <div className="col"> <p>Sandwich Jamón Queso</p>                  
                     <img className="jamonqueso"
                        alt="jamonqueso" 
                        src={jamonqueso} />	</div>	
                    <div className="col"> <p>Café Americano</p>
                    <img className="americano"
                        alt="americano" 
                        src={americano} /></div>
                    <div className="w-100"></div>
                    <div className="col"><p> Croissant </p>
                    <img className="croissant"
                        alt="croissant" 
                        src={croissant} /></div>
                    <div className="col"><p>Latte</p>
                    <img className="latte"
                        alt="latte" 
                        src={latte} /></div>
                    <div className="w-100"></div>
                    <div className="col"><p>Muffin</p>
                    <img className="muffin"
                        alt="muffin" 
                        src={muffin} /></div>
                    <div className="col"><p>Jugo de frutas natural</p>
                    <img className="jugo"
                        alt="jugo" 
                        src={jugo} /></div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default Menudesayuno;


