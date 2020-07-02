import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import burgerlogo from "../img/burgerlogo.png";
import "../components/inicio.css";

class welcome extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-custom">
          <div className="logo">
			<img className="burgerHome"
			alt="burgerlogo" 
			src={burgerlogo} />		
            <h1 className="title-custom">¿Cuál es tu rol?</h1>
            <div>
                <div className='button-welcome'>
			        <Link to="/Waiter">
                        <Button  title="Mesera" />
                     </Link>
			    </div>
			    <div className='button-welcome'>
                    <Link to="/Chef">
                         <Button className="button" title="Chef" />
                    </Link>
			    </div>
            </div>

          </div>
        </div>
      </Fragment>
    );
  }
}

export default welcome;