import {createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses.js';
import filtersReducer from '../reducers/filters.js';


export default ()=>{

  //Store creation
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    combineReducers({
      expenses:expensesReducer,
      filters:filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  /* eslint-enable */

  return store;
};

