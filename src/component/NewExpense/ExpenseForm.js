import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const data = props.data;
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    
    const expesneData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expesneData);

    // setenteredTitle("");
    // setEnteredAmount("");
    // setEnteredDate("");
  };
  const titleChangeHandler = (event) => {
    setenteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    // console.log(event.target.value);

    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // console.log(event.target.value);

    setEnteredDate(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="enteredAmount">Amount</label>
          <input
            type="number"
            name="enteredAmount"
            min="1"
            step="1"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="cancel" onClick={props.closeForm}>
          Cancel
        </button>
        <button type="submit" disabled={enteredTitle===""}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
