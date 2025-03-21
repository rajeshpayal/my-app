import { Avatar } from "@mui/material";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { toast, Toaster } from "react-hot-toast";
import { useFirebase } from "../context/Firebase";

function NavBar() {
  const firebase = useFirebase();

  const logoutHandler = () => {
    firebase
      .signout()
      .then(() => {
        toast.success("Logout was successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <Navbar bg="light" expand="lg">
      <Toaster />
      <Container fluid>
        <Navbar.Brand href="#/">Expenses</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#/myexpenses">My Expenses</Nav.Link>
            <Nav.Link href="#/addexpense">Add Expense</Nav.Link>
          </Nav>
          {!firebase.LoggedIn ? (
            <Button variant="primary" href="#/login">
              Login
            </Button>
          ) : (
            <Button variant="danger" onClick={logoutHandler}>
              Logout
            </Button>
          )}
          {!firebase.isLoggedIn ? (
            <Button
              variant="primary"
              href="#/register"
              style={{ marginLeft: "10px" }}
            >
              Register
            </Button>
          ) : (
            <Avatar
              alt="Remy Sharp"
              src={firebase.user.photoURL}
              style={{ margin: "10px" }}
            />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
