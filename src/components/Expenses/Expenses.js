import React, { useState } from "react";

import "./Expenses.css";
import ExpensItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2022");
  function saveFilterYearHandler(enteredYear) {
    const year = enteredYear;
    setFilterYear(year);
  }

  const expenses = props.list;
  const filterdExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onSaveFilterYear={saveFilterYearHandler}
        />
        {filterdExpenses.length === 0 ? (
          <h3>No expense found</h3>
        ) : (
          filterdExpenses.map((expense) => (
            <ExpensItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
}

export default Expenses;
