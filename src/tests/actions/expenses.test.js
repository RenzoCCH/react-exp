import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

test("Should setup remove expnses action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("set up edis expense", () => {
  const action = editExpense({ note: "New note value" });
  expect(action).toEqual({
    expense: { note: "New note value" },
    type: "EDIT_EXPENSE"
  });
});

test("add expense", () => {
  const action = addExpense(expenses[2]);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  });
});

test("should add expenses to database and store", done => {
  const store = createMockStore({});
  const expenseData = {
    description: "Mouse",
    amount: 3000,
    note: "This one is better",
    createdAt: 1000
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should add expenses with defaults to databse and store", done => {
  const store = createMockStore({});
  const defaults = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0
  };

  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...defaults
        }
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(defaults);
      done();
    });
});

// test('test should setup add expense action object with default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type:'ADD_EXPENSE',
//     expense:{
//       id: expect.any(String),
//       description: undefined,
//       note: undefined,
//       amount: 0,
//       createdAt: 0
//     }
//   });
// });
