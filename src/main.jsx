// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'; // <-- Adicione esta linha aqui
import App from './App.jsx'
import './index.css' // (A ordem deste não importa muito agora)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)