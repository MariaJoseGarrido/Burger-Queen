import React, { useState } from "react";
import "./stylesMenu.css";
import Data from "./Data";
import { db } from "../ConfigFirebase";
import 'firebase/auth';


export default function Menu() {
  
  const [DataType, setDataType] = useState("desayunos");
  const [selectedItems, setSelectedItems] = useState([]);    
  const [nameCliente, setNameCliente] = useState('');
  const [mesaCliente, setMesaCliente] = useState('');

  const handleItemClick = item => {
    setSelectedItems([...selectedItems, item]);
  };
  
  const limpiar = () => {
    setSelectedItems([]);
    setNameCliente([]);
    setMesaCliente([]);
  };


  const saveClientOrder = (item = {}) => {
    db.collection('cliente').doc().set({
      ...item
    })
    limpiar()
    alert("El pedido de " + nameCliente + " se envio a cocina");
  };

  const handleSendClientOrder = () => {
    const order = {
      DataType,
      selectedItems,
      nameCliente,
      mesaCliente,
    }
    saveClientOrder(order)
  };

  //console.log("Pedido",handleSendClientOrder);
  const handleDeleteItem = detetedItems => {
    const detetedItemsOrden =  selectedItems.filter(({id})=> id !== detetedItems)
    setSelectedItems(detetedItemsOrden)
  }

  return (
    <div className="Container">
      <div className="Apps-Data">
        <div id="client-info">
          <label className="titleClient">Nombre del Cliente:</label>
          <input placeholder='Ej: Anliana Aguilar' type='text'value ={nameCliente} onChange={(ev)=> setNameCliente(ev.target.value)}></input>
          <label className="titleClient">Número de mesa:</label>
          <input placeholder='Ej: 8' type='text' value ={mesaCliente} onChange={(ev)=> setMesaCliente(ev.target.value)}></input>
        </div>
        {Object.keys(Data).map(item => (
          <button className="newMenu-Data__type m2" onClick={() => setDataType(item)}>
            {item}
          </button>
        ))}
        <br/>
        <br/>
        <div className="row">
          {Data[DataType].map(item => (
            <div className="card-menu m-1 d-flex align-items-center justify-content-center">
              <div className="newMenu-Data__item" onClick={() => handleItemClick(item)}>
                {item.name} <span>${item.price}</span> <img className="img-menu" alt="" src ={item.img} />
              </div>
            </div>
          ))}
        </div>
      </div>
        <div className="container">
					<div className="row">
						<div className="col-sm">
							<p> <i class="fas fa-concierge-bell"></i>Pedidos</p>
              <div>
                {selectedItems && selectedItems.map(item => (
                  <div class="delete-section ">
                    {item.name} <span>${item.price}</span>
                    <i class="fas fa-times-circle text-danger button-delete ml-1" onClick ={()=> handleDeleteItem(item.id)}></i>
                  </div>
                ))}
                <div><hr/>
                  Total{" "}
                <span>
                  $ {selectedItems.reduce((acc, curr) => acc + curr.price, 0)}
                </span>
              </div>
              </div>
              {selectedItems.length > 0 && (
                <button class="to-kitchen" onClick={handleSendClientOrder}> Enviar a Cocina </button>
              )}
          	</div>
  				</div>
			  </div>
    </div>
  );
}

