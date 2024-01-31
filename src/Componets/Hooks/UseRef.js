import React, { useRef } from "react";
import { Button,Form } from "react-bootstrap";

export default function UseRef() {
  let inputRef = useRef(null);
	function handleInput(){
		inputRef.current.value="1000";
		// console.log(inputRef);
	}
  return (
    <>
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Handle Input</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter user id"
					ref={inputRef}
        />
      </Form.Group>
			<Button className="btn btn-sm" onClick={handleInput}>Handle input</Button>
    </>
  );
}
