import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore }from 'redux'
import { bankingReducer }from './reducers/bankingReducers'
import { DEPOSIT } from './constants/actionTypes'


const store = createStore(bankingReducer);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// actions

// deposit example
const deposit = {
  type: DEPOSIT,
  amount: 100 // set amount here
}
