import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const ExpenseFilter = (event) => {
    props.onFilterDataHandler(event.target.value);
  };
  const years = props.expenses.map((dt) => dt.date.getFullYear());
  // console.log(years);
  const minYear = Math.min(...years);
  // console.log(minYear);

  const maxYear = Math.max(...years);
  // console.log(maxYear);

  const newYears = [];
  for (let i = minYear; i <= maxYear; i++) {
    newYears.push(i);
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={ExpenseFilter}>
          {/* <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option> */}
          {newYears.map((year) => {
            return <option value={year.toString()}>{year}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
