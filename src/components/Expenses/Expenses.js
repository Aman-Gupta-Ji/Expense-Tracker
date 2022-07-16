import React, { useState } from "react";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";
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
        <ExpensesList items={filterdExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
