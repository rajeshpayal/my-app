import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./ExpenseItem.css";

import EditIcon from "@mui/icons-material/Edit";

const ExpenseItem = (props) => {
  const [editData, setEditData] = useState({ title: "", amount: "", date: "" });
  const date = new Date(`${props.date}`);
  const title = props.title;
  const amount = props.amount;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editModal, setEditMoal] = useState(false);

  const editHandler = (event) => {
    handleShow();
    setEditMoal(true);
    setEditData({ title: title, amount: amount, date: new Date(date) });
  };

  return (
    <div className="expense-item" id={props.id}>
      <ExpenseDate date={date} id={props.id} key={props.id} />
      <div className="expense-item__description">
        <h2>{title.toUpperCase()}</h2>
        <div className="expense-item__price">
          <span>&#8377;</span>
          {amount}
        </div>
      </div>
      {/* <EditIcon
        id={props.id}
        style={{
          marginLeft: "10px",
          cursor: "pointer",
          color: "white",
        }}
        onClick={editHandler}
      />
      {editData && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit the expenses</Modal.Title>
          </Modal.Header>
          <Modal.Body className="new-expense">
            <form>
              <div className="new-expense__controls">
                <div className="new-expense__control">
                  <label htmlFor="title">Title</label>
                  <input type="text" name="title" id="title" value={title} />
                </div>
                <div className="new-expense__control">
                  <label htmlFor="amount">Amount</label>
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    min="0"
                    value={amount}
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
                  />
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      )} */}
    </div>
  );
};

export default ExpenseItem;
