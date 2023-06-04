import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';

import productsReducer, { productsFetch } from "./features/productsSlice";
import { productsApi } from "./features/productsApi";
import cartReducer from "./features/cartSlice";


const store = configureStore({
  reducer:{
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productsApi.middleware),
  
    
});

store.dispatch(productsFetch());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
  <Provider store={store}>
    <App />
   </Provider>
   </Router> 
  </React.StrictMode>
);


reportWebVitals();
