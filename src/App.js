import React, { useState } from "react";
import "./App.css";
import Chart from "./component/Chart/Chart";
import SetData from "./component/Data/SetData";
import Expenses from "./component/Expenses/Expenses";
import ExpensesChart from "./component/Expenses/ExpensesChart";
import NewExpense from "./component/NewExpense/NewExpense";
import { getDatabase, set, ref } from "firebase/database";
import { app } from "./component/Data/firebase";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2019, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2010, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const db = getDatabase(app);

const App = () => {
  const [expense, setExpense] = useState(expenses);

  const putData = () => {
    set(ref(db, "users/rajesh"), {
      id: 1,
      name: "Rajesh Payal",
      age: 22,
    });
  };

  const addExpenseHandler = (data) => {
    setExpense((prevExpenses) => {
      return [data, ...prevExpenses];
    });
    console.log(expense);
  };

  return (
    <div className="App">
      <button onClick={putData}>Add</button>
      <SetData data={expense}></SetData>
      <NewExpense onaddExpenseHandler={addExpenseHandler}></NewExpense>

      <Expenses items={expense} />
    </div>
  );
};

export default App;
