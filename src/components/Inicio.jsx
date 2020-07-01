import React from 'react'
import Button from './button'
import burgerlogo from '../img/burgerlogo.png'

export const Home = () => {
    let today = new Date();
    let month = today.getMonth() + 1;
    let allMonth = (month<10) ? '0' + month:month;
    
    return (
        <div>
            <header>
            <div><p>{'Fecha:' + today.getDate() + '-' + allMonth + '-' + today.getFullYear()}</p></div>
            </header>

            <div className="logo">
			<img alt="burgerlogo" src={burgerlogo} />
            </div> 
               
            <Button title='waiter'className="btn-blue"> Mesonero </Button>
            <Button title='chef'className="btn-blue"> Chef </Button>
           
        </div>
    )
}

export default Home;