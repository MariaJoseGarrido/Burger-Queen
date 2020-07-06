import React, { Component } from 'react';
import "../components/Menu.css"
import simple from "../img/almuerzo/simple.jpeg";
import doble from "../img/almuerzo/doble.jpeg";
import cesar from "../img/almuerzo/cesar.jpg"
import limonada from "../img/almuerzo/limonada.jpeg"
import wrap from "../img/almuerzo/wrap.jpeg"
import jugo from "../img/jugo.jpeg"
import nuggets from "../img/almuerzo/nuggets.jpeg"
import cerveza from "../img/almuerzo/cerveza.jpeg"
import nachos from "../img/almuerzo/nachos.jpeg"
import aritos from "../img/almuerzo/aritos.jpg"
import soda from "../img/almuerzo/soda.jpeg"
import papas from "../img/almuerzo/papas.jpeg"

class Menualmuerzo extends Component {
    render () {
        return (
            <React.Fragment>
            <div class="container-sm">
                <div className="title">
                    <div>Para Comer</div>
                    <div>Para Beber</div>
                    <div>Para Acompañar</div>
                </div>
               
                <div class="row">
                    <div className="col"> <p>Burger Princess</p>                  
                     <img className="simple"
                        alt="simple" 
                        src={simple} />	</div>	
                    <div className="col"> <p>Cerveza</p>
                    <img className="cerveza"
                        alt="cerveza" 
                        src={cerveza} /></div>
                    <div className="col"> <p>Nachos</p>
                    <img className="nachos"
                        alt="nachos" 
                        src={nachos} /></div>    
                    <div className="w-100"></div>
                    <div className="col"><p> Burger Queen</p>
                    <img className="doble"
                        alt="doble" 
                        src={doble} /></div>
                    <div className="col"><p>Limonada</p>
                    <img className="limonada"
                        alt="limonada" 
                        src={limonada} /></div>
                       <div className="col"> <p>Aritos de cebolla</p>
                    <img className="aritos"
                        alt="aritos" 
                        src={aritos} /></div>    
                    <div className="w-100"></div>
                    <div className="col"><p>Caesar Shrimp Bowl</p>
                    <img className="cesar"
                        alt="cesar" 
                        src={cesar} /></div>
                    <div className="col"><p>Bebida</p>
                    <img className="soda"
                        alt="soda" 
                        src={soda} /></div>
                        <div className="col"> <p>Papas Fritas</p>
                    <img className="papas"
                        alt="papas" 
                        src={papas} /></div>   
                    <div className="w-100"></div>
                    <div className="col"><p>Wrap</p>
                    <img className="wrap"
                        alt="wrap" 
                        src={wrap} /></div>
                    <div className="col"><p>Jugo de frutas natural</p>
                    <img className="jugo"
                        alt="jugo" 
                        src={jugo} /></div>    
                        <div className="col"> <p>Nuggets</p>
                    <img className="nuggets"
                        alt="nuggets" 
                        src={nuggets} /></div>   
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default Menualmuerzo;


