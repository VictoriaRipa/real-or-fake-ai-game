import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Si tienes este archivo de estilos
import App from './App'; // Este es tu componente principal
import reportWebVitals from './reportWebVitals'; // Opcional, para métricas de rendimiento

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(); // Opcional, para métricas de rendimiento
