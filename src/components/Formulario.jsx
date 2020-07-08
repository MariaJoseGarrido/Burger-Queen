import React, {useState} from 'react';
import 'firebase/auth'
import { useFirebaseApp } from 'reactfire';
//import { auth } from '../ConfigFirebase'
//import { useFirebaseApp, useUser } from 'reactfire';

export const Formulario = (props) =>{
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');
    const firebase = useFirebaseApp();
    //const user = useUser();
    const submit = async () => {
      await firebase.auth().createUserWithEmailAndPassword(email,password);
    console.log(email,password);
    
    }
return(
    <div>
        <div>
            <label htmlFor='email'>Correo electrónico</label>
            <input type='email' id='email' onChange={(ev)=> setEmail(ev.target.value)}></input>
            <label htmlFor='password'>Contraseña</label>
            <input type='password' id='password' onChange={(ev)=> setPasword(ev.target.value)}></input>
           <button onClick= {submit}> Guardar</button>
        </div>
    </div>
)
}
export default Formulario