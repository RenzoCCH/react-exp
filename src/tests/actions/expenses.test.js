import {addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expnses action object', () => {
  const action = removeExpense({id:'123abc'});
  expect(action).toEqual({
    type:'REMOVE_EXPENSE',
    id:'123abc'
  });
});

test('set up edis expense', ()=> {
  const action = editExpense({ note:'New note value'});
  expect(action).toEqual({
    expense:{note:'New note value'},
    type:'EDIT_EXPENSE'
  });
});

test('add expense', ()=> {
  const expenseData = {
    description:'description',
    amount:'1',
    createdAt:'1',
    note:'note'
  };
  const action = addExpense(expenseData);

  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('test should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{
      id: expect.any(String),
      description: undefined,
      note: undefined,
      amount: 0,
      createdAt: 0
    }
  });
});