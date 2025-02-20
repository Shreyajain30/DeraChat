import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { startWebsocketConnection } from './websocket';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
startWebsocketConnection()

