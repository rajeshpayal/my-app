import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import NavBar from "./pages/NavBar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useFirebase } from "./context/Firebase";
import ExpenseItem from "./Expenses/ExpenseItem";
import Card from "../src/component/UI/Card";
import NewExpense from "./Expenses/NewExpense";
import Chart from "./component/Chart/Chart";
import { EditModal } from "./Expenses/EditModal";

const App = (props) => {
  const [expense, setExpense] = useState([]);
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const firebase = useFirebase();

  useEffect(() => {
    const querySnapshot = firebase.getAllData();
    querySnapshot?.then((docs) => setData(docs.docs));
  });

  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="#/" element={<div></div>}></Route>
        <Route path="/" element={<h1>register</h1>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/myexpenses"
          element={
            <div className="expenses">
              {data.map((doc) => (
                <ExpenseItem key={doc.id} id={doc.id} {...doc.data()} />
              ))}
            </div>
          }
        ></Route>
        <Route path="/addexpense" element={<NewExpense />}></Route>
      </Routes>
    </div>
  );
};

export default App;
