import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import { ExpenseListItem } from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render eExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render expenseList with empty message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render expenseListItem', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} key={expenses[0].id}/>);
  expect(wrapper).toMatchSnapshot();
});

//const ExpenseList = (props) =>{
//  return (
//  <div>
//    <h1>Expense List</h1>
//    {props.expenses.map((expense)=>(
//      <ExpenseListItem
//        {...expense}
//        key={expense.id}/>))}
//  </div>
//)};
//
//const mapStateToProps = (state)=>{
//  return {
//    expenses: selectExpenses(state.expenses,state.filters)
//  };
//}
//
//export default connect(mapStateToProps)(ExpenseList);
//
