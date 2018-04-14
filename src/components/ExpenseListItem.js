import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({id, description, amount, createdAt}) => {
  return (
    <section>
      <h3>
        <Link to={`/edit/${id}`}>
          {description}
        </Link>
      </h3>
      {amount !== 0 && (<p>
        <strong>Amount:</strong>
        <span>{numeral(amount/ 100).format('$0,0.00')}</span>
      </p>)}
      {createdAt !== 0 && (<p>
        <strong>Created at:</strong>
        <span>{moment(createdAt).format('MMMM Do, YYYY')}</span>
      </p>)}
    </section>
  );
};

export default ExpenseListItem;



