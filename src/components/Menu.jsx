import React, { Component } from 'react';
import "../components/Menu.css"
import jamonqueso from "../img/jamonqueso.jpeg";

class Menu extends Component {
    render () {
        return (
            <React.Fragment>
            <div class="container-sm">
                <div class="row">
                    <div className="col"> <p>Sandwich Jamón Queso</p>                  
                     <img className="jamonqueso"
                        alt="jamonqueso" 
                        src={jamonqueso} />	</div>	
                    <div className="col"> <p>Café Americano</p></div>
                    <div className="w-100"></div>
                    <div className="col"><p> Croissant </p></div>
                    <div className="col"><p>Latte</p></div>
                    <div className="w-100"></div>
                    <div className="col"><p>Muffin</p></div>
                    <div className="col"><p>Jugo de frutas natural</p></div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default Menu;


