import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';        // ← tiene que decir .jsx
import { CartProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);