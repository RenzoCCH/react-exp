import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render expenseform correctly', ()=> {
  const wrapper = shallow(<ExpenseForm/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', ()=>{
  const wrapper = shallow(<ExpenseForm/>);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit',{
    preventDefault:()=>{}
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const wrapper = shallow(<ExpenseForm/>);
  const value = 'new description';
  wrapper.find('input').at(0).simulate('change',{
    target:{ value }
  });
  expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
  const wrapper = shallow(<ExpenseForm/>);
  const value = 'new Note';
  wrapper.find('textarea').simulate('change',{
    target:{ value }
  });
  expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () => {
  const wrapper = shallow(<ExpenseForm/>);
  const value = '23.50';
  wrapper.find('input').at(1).simulate('change',{
    target:{ value }
  });
  expect(wrapper.state('amount')).toBe(value);
});

test('should set amount if invalid input', () => {
  const wrapper = shallow(<ExpenseForm/>);
  const value = '12.122';
  wrapper.find('input').at(1).simulate('change',{
    target:{ value }
  });
  expect(wrapper.state('amount')).toBe('');
});

test('hsoul call onSubmut prop for valid form submission', () => {
  const onSubmitSpy  =jest.fn();
  const wrapper = shallow(<ExpenseForm expense = {expenses[0]} onSubmit={onSubmitSpy}/>);
  wrapper.find('form').simulate('submit',{
    preventDefault:()=>{}
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt.valueOf()
  });
});

test('Should set New Date on date chnage', () => {
  const wrapper = shallow(<ExpenseForm/>);
  const now = moment();
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('Should set New Date on focus chnage', () => {
  const wrapper = shallow(<ExpenseForm/>);
  const focused = true;
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused});
  expect(wrapper.state('calendarFocused')).toBe(focused);
});