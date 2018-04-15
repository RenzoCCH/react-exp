import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from "../selectors/expenses";
import totalExpenses from "../selectors/expenses-total";
import numeral from 'numeral';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <p>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</p>
  );
};


const mapStateToProps = (state) => {
  let expenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: expenses.length,
    expensesTotal: totalExpenses(expenses)
  };
};



export default connect(mapStateToProps)(ExpensesSummary);
