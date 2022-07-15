import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpensItem(item) {
  const [title, setTitle] = useState(item.title);

  const clickHandler = () => {
    setTitle("Updated..!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={item.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${item.amount}</div>
      </div>
      <button onClick={clickHandler}>Update</button>
    </Card>
  );
}

export default ExpensItem;
