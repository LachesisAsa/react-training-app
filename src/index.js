import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename="/react-training-app">
    <GlobalStyle />
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
