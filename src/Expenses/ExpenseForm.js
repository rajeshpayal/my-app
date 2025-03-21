import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useFirebase } from "../context/Firebase";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const firebase = useFirebase();
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(title);
    if (title === "" && date === "" && amount === "") {
      toast.error("Please fill all the input fields");
      return;
    }
    if (title === "") {
      toast.error("Please enter a title");
    } else if (date === "") {
      toast.error("Please enter a date");
    } else if (amount === "") {
      toast.error("Please enter a amount");
    }

    // firebase.addExpensesToDatabase(title, amount, date);
    firebase.writeUserData(title, amount, date);
    toast.success("Expenses added successfully");
    setDate("");
    setTitle("");
    setAmount("");
  };
  return (
    <form onSubmit={submitHandler}>
      <Toaster />
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            min="0"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            min="2020-00-01"
            max="2024-00-01"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
