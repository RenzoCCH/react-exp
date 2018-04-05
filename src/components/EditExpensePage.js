import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onEditExpense = ( expense )=>{
    this.props.editExpense({...expense,id:this.props.expense.id});
    this.props.history.push('/');
  }

  onRemoveExpense =  () => {
    this.props.removeExpense({ id:this.props.expense.id });
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        {this.props.match.params.id}
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onEditExpense}
        ></ExpenseForm>
        <button onClick={this.onRemoveExpense}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense)=>expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editExpense  : (expense) => dispatch(editExpense(expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);