import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  //max = '2023-12-31'
  const today = new Date();
  const n = new Date(today);
  n.setDate(n.getDate() + 356);
  const date = n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate();

  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmont] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangehandler = (event) => {
    // setEnteredTitle(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // });
    //may lead to incorrect resutl
    //cause of late schedule

    //when our new state depends on previous satae
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
  };
  const amountChangehandler = (event) => {
    // setEnteredAmont(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value
    // });

    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });
  };
  const dateChangehandler = (event) => {
    // setEnteredDate(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value
    // });

    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseDate = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    // console.log(expenseDate);

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
    // two way binding

    props.onSaveExpenseData(expenseDate);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle} //two way binding
            onChange={titleChangehandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangehandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.enteredDate}
            min="2019-01-04"
            max={date}
            onChange={dateChangehandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
