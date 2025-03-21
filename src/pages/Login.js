import { async } from "@firebase/util";
import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { toast, Toaster } from "react-hot-toast";
import { useFirebase } from "../context/Firebase";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createing, setCreateing] = useState(false);
  const firebase = useFirebase();

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    setCreateing(true);

    await firebase
      .signinWithEmailAndPassword(email, password)
      .then((userCredential) => {
        toast.success("Login success");
        setEmail("");
        setPassword("");
        navigate("#");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage);
      })
      .finally(() => setCreateing(false));
  };

  const googleHandler = () => {
    firebase
      .signinWithGoogle()
      .then((result) => {
        toast.success("Login successful");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage);
      });
  };

  return (
    <div className="container" style={{ marginTop: "10px" }}>
      <Form onSubmit={submitHandler}>
        <Toaster />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {!createing ? "Login" : <Spinner animation="border" size="sm" />}
        </Button>
      </Form>
      <h1>OR</h1>
      <GoogleButton onClick={googleHandler} />
    </div>
  );
}

export default Login;
