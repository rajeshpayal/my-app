import React, { useState } from "react";
import Card from "../UI/Card.js";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart.js";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesList from "./ExpensesList.js";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterDataHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  // let expensesContent = <p>No Expenses Found</p>;
  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((item) => (
  //     <ExpenseItem
  //       key={item.id}
  //       title={item.title}
  //       date={item.date}
  //       amount={item.amount}
  //     ></ExpenseItem>
  //   ));

  return (
    <>
      <Card className="expenses">
        {filteredExpenses.length > 0 && (
          <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        )}

        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterDataHandler={filterDataHandler}
          expenses={props.items}
        ></ExpensesFilter>
        {/* {filteredExpenses.length === 0 && <p>No Expenses Found</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((item) => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              date={item.date}
              amount={item.amount}
            ></ExpenseItem>
          ))} */}
        <ExpensesList items={filteredExpenses}></ExpensesList>
        {/* {expensesContent} */}
      </Card>
    </>
  );
};

export default Expenses;
