import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../Menus/Menu.css";
import "../Rol/Cliente.css"
import jamonqueso from "../../img/jamonqueso.jpeg";
import americano from "../../img/americano.jpeg";
import croissant from "../../img/croissant.jpeg";
import latte from "../../img/latte.jpeg";
import muffin from "../../img/muffin.jpeg";
import jugo from "../../img/jugo.jpeg";
import Cliente from "../../components/Rol/Cliente"
import Waiter from "../../components/Rol/Waiter"
import backButton from "../../img/backButton.png"
import ButtonModal from "../ButtonModal";
import "../ButtonModal.css"

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
            <div className="container-sm">
                <div className="row">
                    {/* PARA COMER  */}
                    <div className="col-xl-4 row p-3 back">
                        <div className="col-12 title ">
                            <h1 className='title-menu'>Para Comer</h1>
                        </div>
                        <div className="col-xl-12 col-md-6"> 
                        <ButtonModal className="botonModal"  title="Sandwich Jamon Queso" />         
                            <div className="card-img">
                                <img className="jamonqueso d-flex"
                                alt="jamonqueso" 
                                src={jamonqueso} />	
                            </div>
                        </div>
                        <div className="col-xl-12 col-md-6">
                        <ButtonModal className="botonModal"  title="Croissant" />
                            <div className="card-img">
                                <img className="Croissant d-flex"
                                    alt="croissant" 
                                    src={croissant} />
                            </div>
                        </div>
                        <div className="col-xl-12 col-md-6">
                        <ButtonModal className="botonModal"  title="Muffin" />
                            <div className="card-img">
                                <img className="Muffin d-flex"
                                alt="muffin" 
                                src={muffin} />
                            </div>
                        </div>
                    </div>
                    {/* PARA BEBER */}
                    <div className="col-xl-4 row p-3 back">
                        <div className="col-12 title ">
                            <h1 className='title-menu'>Para Beber</h1>
                        </div>
                        <div className="col-xl-12 col-md-6"> 
                        <ButtonModal className="botonModal"  title="Café Americano" />                  
                            <div className="card-img">
                                <img className="Café Americano d-flex"
                                alt="americano" 
                                src={americano} />	
                            </div>
                        </div>
                        <div className="col-xl-12 col-md-6">
                        <ButtonModal className="botonModal"  title="Latte" />
                            <div className="card-img">
                                <img className="latte d-flex"
                                alt="latte" 
                                src={latte} />
                            </div>
                        </div>
                        <div className="col-xl-12 col-md-6">
                        <ButtonModal className="botonModal"  title="Jugo Natural" />
                            <div className="card-img">
                                <img className="jugo d-flex"
                                alt="jugo" 
                                src={jugo} />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            
            </React.Fragment>
        );
    }
}

export default Menudesayuno;



