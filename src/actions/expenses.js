import database from "../firebase/firebase";

// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

// component calls action generator
// action generator returns object
// component dispatches function (?)
// redux store changes (has the ability to dispatch other actions and do whatever it wants)

//ADD_EXPENSE
export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense: expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = { description, note, amount, createdAt };
    return database
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};

//EDIT_EXPENSE
export const editExpense = expense => ({
  type: "EDIT_EXPENSE",
  expense
});

export const startEditExpense = expense => {
  const expenseData = {
    amount: expense.amount,
    createdAt: expense.createdAt,
    description: expense.description,
    note: expense.note
  };
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${expense.id}`)
      .update(expenseData)
      .then(() => {
        dispatch(editExpense(expense));
      });
  };
};

//SET_EXPENSES
export const setExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const expenses = [];
    return database
      .ref(`users/${uid}/expenses`)
      .once("value")
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};
