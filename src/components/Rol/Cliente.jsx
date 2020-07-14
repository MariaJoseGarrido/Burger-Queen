import React, { useState } from "react";
import "./Cliente.css";
import 'firebase/auth';
import { db } from '../../ConfigFirebase';

 export const RegisteCliente = () => {

    const [nameCliente, setNameCliente] = useState('');
    const [mesaCliente, setMesaCliente] = useState('');
    const customerInformation = (e) => {
    db.collection('cliente').add({
     nameCliente:nameCliente,
     mesaCliente:mesaCliente,
    })
      .then(res=>{
        setNameCliente('')
        setMesaCliente('')
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      })
    }
    return (
      <div>
        <label className="titleClient">Nombre del Cliente:</label>
        <input placeholder='Nombre Cliente' type='text'value ={nameCliente} onChange={(ev)=> setNameCliente(ev.target.value)}></input>
        <label className="titleClient">Numero del Cliente:</label>
        <input placeholder='Numero de Mesa' type='text' value ={mesaCliente} onChange={(ev)=> setMesaCliente(ev.target.value)}></input>
        <button className='btnEntrada' onClick= {customerInformation}>Guardar</button>
      </div>
    );
  }
   export default  (RegisteCliente);