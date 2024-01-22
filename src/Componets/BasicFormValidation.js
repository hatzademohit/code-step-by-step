import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function BasicFormValidation() {
  const [userid, setUserid] = useState("");
  const [userpass, setUserpass] = useState("");
  const [uiErr, setUiErr] = useState(false);
  const [upErr, setUpErr] = useState(false);

  function formSubmit() {
    if (userid.length <= 3 || userpass.length <= 3) {
      alert("Please Enter Valid Credentials");
    } else {
      alert("Login Successfully");
    }
  }

  function userHandler(e) {
    let item = e.target.value;
    if (item.length <= 3) {
      setUiErr(true);
    } else {
      setUiErr(false);
    }
    setUserid(item);
  }
  function passHandler(e) {
    let item = e.target.value;
    if (item.length <= 3) {
      setUpErr(true);
    } else {
      setUpErr(false);
    }
    setUserpass(item);
  }

  return (
    <Form>
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter User Id</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter user id"
          onChange={userHandler}
        />
        {uiErr ? (
          <span className="text-danger">Please enter valid user id</span>
        ) : (
          ""
        )}
      </Form.Group>
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput2">
        <Form.Label>Enter User Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter user password"
          onChange={passHandler}
        />
        {upErr ? (
          <span className="text-danger">Please enter valid password</span>
        ) : (
          ""
        )}
      </Form.Group>
      <Button onClick={formSubmit} className="btn btn-sm">
        Submit Data
      </Button>
    </Form>
  );
}
