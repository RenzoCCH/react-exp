import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper, match;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  match = {params:{id:expenses[1].id}};
  wrapper = shallow(<EditExpensePage
    params = {expenses[1]}
    expense={expenses[1]}
    editExpense={editExpense}
    removeExpense={removeExpense}
    history={history}
    match={match}
  />);
});

test('Should render EditExpensePage', ()=> {
  expect(wrapper).toMatchSnapshot();
});

test('Should Handle EditExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[1]);
});

test('Should Handle removeExpense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({
    id: expenses[1].id
  });
});


