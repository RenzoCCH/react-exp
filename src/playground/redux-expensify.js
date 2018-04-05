import {addExpense,removeExpense,editExpense} from '../actions/expenses.js';
import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from '../actions/filters.js';
import expensesReducer from '../reducers/expenses.js';
import filtersReducer from '../reducers/filters.js';
import getVisibleExpenses from '../selectors/expenses.js'



store.subscribe(()=>{
  const state = store.getState();
  const visibleExpense = getVisibleExpenses(state.expenses,state.filters);
  console.log(visibleExpense);
});

const expenseOne = store.dispatch(addExpense({description:'Rent', amount:100, createdAt:-21000}));
const expenseTwo = store.dispatch(addExpense({description:'Coffe', amount:10, createdAt:-1000}));
//store.dispatch(editExpense({id:expenseOne.expense.id,description:'Coffe Edited',amount:200}));
//store.dispatch(setTextFilter('rent'));
//store.dispatch(setTextFilter());
//store.dispatch(sortByAmount());
//store.dispatch(sortByDate());
//store.dispatch(setStartDate(0));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(1250));
//store.dispatch(setEndDate());

//console.log(expenseOne, expenseTwo);

//store.dispatch(removeExpense({id:expenseOne.expense.id}));




const demosState = {
  expenses:[{
    id:'poisiofowefew',
    description:'January Rent',
    note:'This was the final payment for that address',
    amount: 54500,
    createAt: 0
  }],
  filters:{
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate:undefined,
    endDate:undefined
  }
};

