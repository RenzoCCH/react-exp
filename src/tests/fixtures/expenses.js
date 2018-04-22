import moment from "moment";

export default [
  {
    id: "1",
    description: "Gum",
    note: "",
    amount: 195,
    createdAt: moment(0)
  },
  {
    id: "2",
    description: "Rent",
    note: "",
    amount: 109500,
    createdAt: moment(0).subtract(4, "days")
  },
  {
    id: "3",
    description: "Credit Card",
    note: "",
    amount: 4500,
    createdAt: moment(0).add(4, "days")
  }
];

export const newExpenses = [
  {
    id: "4",
    description: "shoes",
    note: "",
    amount: 1950,
    createdAt: moment(0).add(6, "days")
  },
  {
    id: "5",
    description: "Toys",
    note: "",
    amount: 10950000,
    createdAt: moment(0).add(10, "days")
  }
];
