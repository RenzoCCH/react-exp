//Get visible expnese
export default expenses => {
  return expenses.reduce((reduce, expense) => reduce + expense.amount ,0);
};