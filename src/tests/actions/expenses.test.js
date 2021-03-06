import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense,
  startEditExpense
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";
import moment from "moment";

const createMockStore = configureMockStore([thunk]);
const uid = "thisismytestuid";
const defaultAuthState = { auth: { uid } };

beforeEach(done => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = {
      description,
      note,
      amount,
      createdAt: createdAt.unix()
    };
  });
  database
    .ref(`users/${uid}/expenses`)
    .set(expensesData)
    .then(() => done())
    .catch(() => console.log("couldn't set firebase"));
});

test("Should setup remove expnses action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should remove expenses from firebase", done => {
  const store = createMockStore(defaultAuthState);
  store
    .dispatch(startRemoveExpense(expenses[0]))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "REMOVE_EXPENSE",
        id: expenses[0].id
      });
      return database
        .ref(`users/${uid}/expenses/${expenses[0].id}`)
        .once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});

test("set up edis expense", () => {
  const action = editExpense({ note: "New note value" });
  expect(action).toEqual({
    expense: { note: "New note value" },
    type: "EDIT_EXPENSE"
  });
});

test("should edit expneses from firebase", done => {
  const store = createMockStore(defaultAuthState);
  const expenseEdited = {
    ...expenses[0],
    description: "edited",
    createdAt: expenses[0].createdAt.unix()
  };
  store
    .dispatch(startEditExpense(expenseEdited))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "EDIT_EXPENSE",
        expense: expenseEdited
      });
      return database
        .ref(`users/${uid}/expenses/${expenses[0].id}`)
        .once("value");
    })
    .then(snapshot => {
      expect({
        id: snapshot.key,
        ...snapshot.val()
      }).toEqual(expenseEdited);
      done();
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
  const store = createMockStore(defaultAuthState);
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
      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should add expenses with defaults to databse and store", done => {
  const store = createMockStore(defaultAuthState);
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
      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(defaults);
      done();
    });
});

test("should set up SET EXPENSE action with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses
  });
});

test("should fetch the expenses form firebase", done => {
  const store = createMockStore(defaultAuthState);
  const expensesFormat = expenses.map(exp => ({
    ...exp,
    createdAt: moment(exp.createdAt).unix()
  }));
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses: expensesFormat
    });
    done();
  });
});
