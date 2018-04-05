import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import AppRouter from './routers/AppRouter.js';

import configureStore from './store/configureStore.js';
import {addExpense,removeExpense,editExpense} from './actions/expenses.js';
import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js'

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({description:'Water bill',amount:4500}));
store.dispatch(addExpense({description:'Gas bill',createdAt:1000}));
store.dispatch(addExpense({description:'Rent',amount:109500}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);

const jsx = (
  <Provider  store={store}>
    <AppRouter/>
  </Provider>
);
ReactDOM.render(jsx,document.getElementById('app'));

