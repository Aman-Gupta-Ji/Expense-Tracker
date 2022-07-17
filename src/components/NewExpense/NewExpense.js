import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: new Date().toISOString(),
    };
    props.onAddExpense(expenseData);
    // console.log(expenseData);
    // setIsAdding(false);
  }

  const setIsAddingHandler = () => {
    setIsAdding(true);
  };
  const unsetIsAddingHandler = () => {
    console.log("cancle");
    setIsAdding(false);
  };

  return (
    <div className="new-expense">
      {!isAdding && (
        <button onClick={setIsAddingHandler}>Add New Expense</button>
      )}
      {isAdding && (
        <ExpenseForm
          onCancel={unsetIsAddingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
