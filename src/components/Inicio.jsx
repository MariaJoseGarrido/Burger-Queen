import React from 'react'
import Button from './button'
import burgerlogo from '../img/burgerlogo.png'
import "./inicio.css";

export const Home = () => {
    let today = new Date();
    let month = today.getMonth() + 1;
    let allMonth = (month<10) ? '0' + month:month;
    
    return (
        <div>
            <header>
            <div className="date"><p>{'Fecha: ' + today.getDate() + '-' + allMonth + '-' + today.getFullYear()}</p></div>
            </header>

            <div className="logo">
			<img class="burgerHome" alt="burgerlogo" src={burgerlogo} />
            </div> 
               
            <Button title='Mesonera'className="btn-blue"> Mesonero </Button>
            <Button title='Chef'className="btn-blue"> Chef </Button>
           
        </div>
    )
}

export default Home;