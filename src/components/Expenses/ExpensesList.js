import React from "react";

import "./ExpensesList.css";
import ExpensItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const expenses = props.items;
  if (expenses.length === 0)
    return <h3 className="expenses-list__fallback">No expense found</h3>;
  return (
    <ul className="expenses-list">
      {expenses.length !== 0 &&
        expenses.map((expense) => (
          <ExpensItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </ul>
  );
};

export default ExpensesList;
