import React, { useState } from "react";

import "./Expenses.css";
import ExpensItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2022');
  function saveFilterYearHandler(enteredYear) {
    const year = enteredYear;
    console.log(year);
    setFilterYear(year);
  }

  const expenses = props.list;
  return (
    <div>
      <ExpensesFilter selected={filterYear} onSaveFilterYear={saveFilterYearHandler} />
      <Card className="expenses">
        <ExpensItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpensItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpensItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <ExpensItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
