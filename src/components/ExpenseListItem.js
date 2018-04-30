import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

export const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  return (
    <Link className="list-item" to={`/edit/${id}`}>
      <div>
        <h3 className="list-item__title">{description}</h3>
        {createdAt !== 0 && (
          <span className="list-item__subtitle">{moment(createdAt).format("MMMM Do, YYYY")}</span>
        )}
      </div>
      <h3 className="list-item__data">
        {amount !== 0 && <span>{numeral(amount / 100).format("$0,0.00")}</span>}
      </h3>
    </Link>
  );
};

export default ExpenseListItem;
