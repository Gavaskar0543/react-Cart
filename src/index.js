import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCokWNF1bO9qtH1byh0LERU1rEZ6y3vGK4",
  authDomain: "cart-c9bfd.firebaseapp.com",
  projectId: "cart-c9bfd",
  storageBucket: "cart-c9bfd.appspot.com",
  messagingSenderId: "484629330025",
  appId: "1:484629330025:web:ea707018948a9fd9f74af8"
};

 const app = initializeApp(firebaseConfig);
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export default app;


