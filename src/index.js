import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';

import productsReducer, { productsFetch } from "./features/productsSlice";
import { productsApi } from "./features/productsApi";
import cartReducer from "./features/cartSlice";
import authReducer from "./features/authSlice";


const store = configureStore({
  reducer:{
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productsApi.middleware),
  
    
});

store.dispatch(productsFetch());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
   </Provider>
  </React.StrictMode>
);


reportWebVitals();
