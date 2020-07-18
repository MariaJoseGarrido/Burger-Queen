import React, { Component } from 'react';
import { db } from "../../ConfigFirebase"
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
		state = {
		order: [],
		};
	
	  componentDidMount() {
			db.collection('cliente').orderBy('date','asc')
			.onSnapshot((snapShots) => {
    		this.setState({
					order: snapShots.docs.map((doc) => {
						return {
							id: doc.id,
							data: doc.data().selectedItems,
							nameCliente: doc.data().nameCliente,
							mesaCliente: doc.data().mesaCliente,
						};
					}),
				});
      		})
		}

	 render() {
		const { order } = this.state;
		//console.log( "order", order );
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
        						{order.map((item) => (
          							<div><hr/>
            							<p className="client-info">Cliente : {item.nameCliente}</p>
           								<p className="client-info">Mesa : {item.mesaCliente}</p>
            							{item.data.map((selectedItems) => {
              								return (
                								<div>
                  									<p className="client-info">{selectedItems.name}</p>
                  								</div >
              								);
           								})}
           							</div>
        						))}                				
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