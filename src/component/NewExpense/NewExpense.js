import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [openForm, setOpenForm] = useState(false);
  const saveExpenseDataHandler = (enetredExpenseData) => {
    const expenseData = { ...enetredExpenseData, id: Math.random().toString() };
    console.log(expenseData);
    props.onaddExpenseHandler(expenseData);
  };

  const startEditingHandler = () => {
    setOpenForm(true);
  };

  const stopEditingHandler = () => {
    setOpenForm(false);
  };

  return (
    <>
      <div className="new-expense">
        {!openForm && <button onClick={startEditingHandler}>Add New Expneses</button>}
        {openForm && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            closeForm={stopEditingHandler}
          ></ExpenseForm>
        )}
      </div>
    </>
  );
};

export default NewExpense;
