import React from 'react';
import { Link } from 'react-router-dom';

export const ExpenseListItem = ({id,description,amount,createdAt})=>{
  return (
    <section>
      <h3>
        <Link to={`/edit/${id}`}>{description}</Link>
      </h3>
      {amount !== 0 && <p><strong>Amount:</strong><span>{amount}</span></p>}
      {createdAt !== 0 && <p><strong>Created at:</strong><span>{createdAt}</span></p>}
    </section>
  );
};

export default ExpenseListItem;



