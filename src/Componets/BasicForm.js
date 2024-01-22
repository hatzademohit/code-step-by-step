import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function BasicForm() {
  const [name, setName] = useState("");
  const [select, setSelect] = useState("");
  const [tnc, setTnc] = useState(false);
  const [submitdata, setSubmitdata] = useState("");
  function getFormData() {
    console.log(name, select, tnc);
    setSubmitdata(name + " " + select + " " + tnc);
  }
  function clearData() {
    setName("");
    setSelect("");
    setTnc(false);
    setSubmitdata(!submitdata);
  }
  return (
    <Form>
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Select</Form.Label>
        <Form.Select
          aria-label="Default select example"
          value={select}
          onChange={(e) => setSelect(e.target.value)}
        >
          <option>Open this select menu</option>
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
        </Form.Select>
      </Form.Group>
      <Form.Check
        type="checkbox"
        id="terms"
        label="Accept terms and conditions"
        checked={tnc}
        onChange={(e) => setTnc(e.target.checked)}
      />
      <p>
        <b>Submited Data: </b>
        {submitdata}
      </p>
      <Button className="btn btn-sm" onClick={getFormData}>
        Submit Data
      </Button>
      <Button className="btn btn-sm ms-2" onClick={clearData}>
        Clear Data
      </Button>
    </Form>
  );
}
