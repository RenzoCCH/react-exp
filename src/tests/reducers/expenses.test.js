import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should sed efault state', () => {
  const state = expensesReducer(undefined,{ type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id',() => {
  const action = {
    type:'REMOVE_EXPENSE',
    id:expenses[1].id
  };
  const state = expensesReducer(expenses,action);
  expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expenses if id not found',() => {
  const action = {
    type:'REMOVE_EXPENSE',
    id:'-1'
  };
  const state = expensesReducer(expenses,action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should add an expense', () => {
  const newExpense = {
    id: '4',
    description: 'Bread',
    note: '',
    amount: 1950,
    createdAt: moment(0)
  };

  const state = expensesReducer(expenses,{
    type:'ADD_EXPENSE',
    expense:newExpense
  });

  expect(state).toEqual([...expenses, newExpense]);
});

test('should edit an expense', () => {
   const expenseEdited = {
     id: expenses[0].id,
     description: 'edited',
     note: '',
     amount: 19500,
     createdAt: moment(0)
   };

  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    expense:expenseEdited
  });

  expect(state[0]).toEqual(expenseEdited);
});

test('should not edit expense if expense not found', ()=> {
  const expenseEdited = {
    id: '-1',
  };
  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    expense:expenseEdited
  });
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});


//Expenses Reducer
//const expensesReducerDefaultState = [];
//
//export default (state = expensesReducerDefaultState,action={})=>{
//  switch (action.type){
//    case 'ADD_EXPENSE':
//      return [...state,action.expense];
//    case 'REMOVE_EXPENSE':
//      return state.filter(({id})=>action.id!==id);
//    case 'EDIT_EXPENSE':
//      return state.map((exp)=>{
//        if(exp.id===action.expense.id){
//          return {...exp, ...action.expense};
//        }
//        else return exp
//      });
//    default:
//      return state;
//  }
//};

