import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }
  return (
    <>
      <ul className="expenses-list">
        {props.items.map((item) => (
          <ExpenseItem
            id={item.id}
            key={item.id}
            title={item.title}
            date={item.date}
            amount={item.amount}
          ></ExpenseItem>
        ))}
      </ul>
    </>
  );
};

export default ExpensesList;
