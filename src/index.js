import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FirebaseAppProvider } from 'reactfire'
import { firebaseConfig } from './ConfigFirebase'

ReactDOM.render((
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={'Conectando la app'}>
  <App />
  </Suspense>
  </FirebaseAppProvider>
),
  document.getElementById('root')
);
