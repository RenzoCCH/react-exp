import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { editExpense, startRemoveExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  onEditExpense = expense => {
    this.props.editExpense({ ...expense, id: this.props.expense.id });
    this.props.history.push("/");
  };

  onRemoveExpense = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        {this.props.match.params.id}
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onEditExpense}
        />
        <button onClick={this.onRemoveExpense}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editExpense: expense => dispatch(editExpense(expense)),
    startRemoveExpense: data => dispatch(startRemoveExpense(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
