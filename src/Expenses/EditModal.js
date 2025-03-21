import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./ExpenseForm.css";
import "./NewExpense.css";

export function EditModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit the expenses</Modal.Title>
        </Modal.Header>
        <Modal.Body className="new-expense">
          <form>
            <div className="new-expense__controls">
              <div className="new-expense__control">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" />
              </div>
              <div className="new-expense__control">
                <label htmlFor="amount">Amount</label>
                <input type="number" name="amount" id="amount" min="0" />
              </div>
              <div className="new-expense__control">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  min="2020-00-01"
                  max="2024-00-01"
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
    </>
  );
}
