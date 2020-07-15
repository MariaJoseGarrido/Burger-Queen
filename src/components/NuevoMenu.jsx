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
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
console.log(setProduct);
console.log(setPrice);
  
  const handleItemClick = item => {
  //console.log("handleItemClick", handleItemClick);
    setSelectedItems([...selectedItems, item]);
    db.collection('cliente').add({
      nameCliente:nameCliente,
      mesaCliente:mesaCliente,
      product:product,
      price:price,
    })
  };
  
   const saveClientOrder = (item = {}) => {
     db.collection('cliente').add({
       ...item
    })
   };

  const handleSendClientOrder = () => {
    const order = {
      DataType,
      selectedItems,
      nameCliente,
      mesaCliente,
      product,
      price
    }
    saveClientOrder(order)
  };

  console.log("Pedido",handleSendClientOrder);
  const handleDeleteItem = detetedItems => {
  const detetedItemsOrden =  selectedItems.filter(({id})=> id !== detetedItems)
  setSelectedItems(detetedItemsOrden)
  }
  return (

    <div className="Container">
      <div className="Apps-Data">
      <div id="client-info">
        <label className="titleClient">Nombre del Cliente:</label>
        <input placeholder='Nombre Cliente' type='text'value ={nameCliente} onChange={(ev)=> setNameCliente(ev.target.value)}></input>
        <label className="titleClient">Número de mesa:</label>
        <input placeholder='Numero de Mesa' type='text' value ={mesaCliente} onChange={(ev)=> setMesaCliente(ev.target.value)}></input>
      </div>
        {Object.keys(Data).map(item => (
          <button className="newMenu-Data__type" onClick={() => setDataType(item)}>
            {item}
          </button>
        ))}
        <br />
        <br />
        {Data[DataType].map(item => (
          <div className="newMenu-Data__item" onClick={() => handleItemClick(item)}>
            {item.name} <span>${item.price}</span> <img className="img-menu" alt="" src ={item.img} />
          </div>
        ))}
      </div>
        <div className="container">
					<div className="row">
						<div className="col-sm">
							<p> <i class="fas fa-concierge-bell"></i>Pedidos</p>
            <div>
              {selectedItems && selectedItems.map(item => (
                <div class="delete-section">
                  {item.name} <span>${item.price}</span>
                  <button class="button-delete" onClick ={()=> handleDeleteItem(item.id)}>x</button>
                </div>
              ))}
              <div >
                <hr/>
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


