import React, { Component } from 'react';
import backButton from "../../img/backButton.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Waiter from "../../components/Rol/Waiter"
import Cliente from "../../components/Rol/Cliente"
import "../Menus/Menu.css"
import simple from "../../img/almuerzo/simple.jpeg";
import doble from "../../img/almuerzo/doble.jpeg";
import cesar from "../../img/almuerzo/cesar.jpg";
import limonada from "../../img/almuerzo/limonada.jpeg";
import wrap from "../../img/almuerzo/wrap.jpeg";
import jugo from "../../img/jugo.jpeg"
import nuggets from "../../img/almuerzo/nuggets.jpeg";
import cerveza from "../../img/almuerzo/cerveza.jpeg";
import nachos from "../../img/almuerzo/nachos.jpeg";
import aritos from "../../img/almuerzo/aritos.jpg";
import soda from "../../img/almuerzo/soda.jpeg";
import papas from "../../img/almuerzo/papas.jpeg";
import ButtonModal from "../ButtonModal";
import "../ButtonModal.css"

class Menualmuerzo extends Component {
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
                        <ButtonModal className="botonModal"  title="Burger Princess" />                  
                            <div className="card-img">
                                <img className="simple d-flex"
                                alt="simple" 
                                src={simple} />	
                            </div>
                        </div>
                        <div className="col-xl-12 col-md-6">
                        <ButtonModal className="botonModal"  title="Burger Queen" />
                            <div className="card-img">
                                <img className="doble d-flex"
                                    alt="doble" 
                                    src={doble} />
                            </div>
                        </div>
                        <div className="col-xl-12 col-md-6">
                        <ButtonModal className="botonModal"  title="Caesar Shrimp Bowl" />
                            <div className="card-img">
                                <img className="cesar d-flex"
                                alt="cesar" 
                                src={cesar} />
                            </div>
                        </div>
                        <div className="col-xl-12 col-md-6">
                        <ButtonModal className="botonModal"  title="Wrap" />
                            <div className="card-img">
                                <img className="wrap d-flex"
                                alt="wrap" 
                                src={wrap} />
                            </div>
                        </div>
                    </div>
                    {/* PARA BEBER */}
                    <div className="col-xl-4 row p-3 back">
                        <div className="col-12 title ">
                            <h1 className='title-menu'>Para Beber</h1>
                        </div>
                        <div className="col-xl-12 col-md-6"> 
                        <ButtonModal className="botonModal"  title="Cerveza" />                  
                            <div className="card-img">
                                <img className="cerveza d-flex"
                                alt="cerveza" 
                                src={cerveza} />	
                            </div>
                        </div>
                        <div className="col-xl-12 col-md-6">
                        <ButtonModal className="botonModal"  title="Limonada" />
                            <div className="card-img">
                                <img className="limonada d-flex"
                                alt="limonada" 
                                src={limonada} />
                            </div>
                        </div>
                        <div className="col-xl-12 col-md-6">
                        <ButtonModal className="botonModal"  title="Bebida" />
                            <div className="card-img">
                                <img className="soda d-flex"
                                alt="soda" 
                                src={soda} />
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
                    {/* PARA ACOMPAÑAR */}
                    <div className="col-xl-4 row p-3 back">
                        <div className="col-12 title ">
                            <h1 className='title-menu'>Para Acompañar</h1>
                        </div>
                        <div className="col-xl-12 col-md-6"> 
                        <ButtonModal className="botonModal"  title="Nachos" />                 
                            <div className="card-img">
                                <img className="nachos d-flex"
                                alt="nachos" 
                                src={nachos} />	
                            </div>
                        </div> 
                        <div className="col-xl-12 col-md-6">
                        <ButtonModal className="botonModal"  title="Aros de Cebolla" />
                            <div className="card-img">
                                <img className="aritos d-flex"
                                alt="aritos" 
                                src={aritos} />
                            </div>
                        </div>
                        <div className="col-xl-12 col-md-6">
                        <ButtonModal className="botonModal"  title="Papas Fritas" />
                            <div className="card-img">
                                <img className="papas d-flex"
                                alt="papas" 
                                src={papas} />
                            </div>
                        </div>
                        <div className="col-xl-12 col-md-6">
                        <ButtonModal className="botonModal"  title="Nuggets" />
                            <div className="card-img">
                                <img className="nuggets d-flex"
                                alt="nuggets" 
                                src={nuggets} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-group">
            <button type="button" class="list-group-item list-group-item-action active">
                    Lista de Pedido:
            </button>
                <button type="button" class="list-group-item list-group-item-action">Papas fritas</button>
                <button type="button" class="list-group-item list-group-item-action">Burger Queen</button>
                <button type="button" class="list-group-item list-group-item-action">Aritos de cebolla</button>
               
            </div>
            </React.Fragment>
        );
    }
}

export default Menualmuerzo;


