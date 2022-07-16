import React from "react";

import "./ExpensesList.css";
import ExpensItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const expenses = props.items;
  return (
    <div>
      {expenses.length === 0 && <h3 className="expenses-list__fallback">No expense found</h3>}
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
    </div>
  );
};

export default ExpensesList;
