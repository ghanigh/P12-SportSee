import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { getSessions } from "./requete.js";
import { Service } from "./service.js";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


