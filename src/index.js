import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './App';
import { initializeApp } from 'firebase/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
  const app = initializeApp({apiKey: "AIzaSyCZq9CI2pgCdfGGSIEArzjPnCtTFLCOM78",
  authDomain: "undefinedstore-575bf.firebaseapp.com",
  projectId: "undefinedstore-575bf",
  storageBucket: "undefinedstore-575bf.appspot.com",
  messagingSenderId: "38806740107",
  appId: "1:38806740107:web:8ecc2fa19953a1f922488e"});
root.render(
  <React.StrictMode>
   
    <App />
  
  </React.StrictMode>
);
