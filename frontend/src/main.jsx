import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Provider } from 'react-redux';
import store from './redux/store.js';
import React from 'react';
 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
   </Provider>
  </React.StrictMode>
  )
