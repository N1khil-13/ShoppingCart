import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { initializeApp } from 'firebase/app';
import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBHxPqydMZbsVsqxSignRxshoYyJL1FAHM",
  authDomain: "cart-fb552.firebaseapp.com",
  projectId: "cart-fb552",
  storageBucket: "cart-fb552.appspot.com",
  messagingSenderId: "701995557119",
  appId: "1:701995557119:web:9974b4169cffb724172cca"
};


firebase.initializeApp(firebaseConfig);
// app();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );