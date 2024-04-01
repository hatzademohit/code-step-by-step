import React, { useRef } from "react";
import { Button,Form } from "react-bootstrap";
import ForwardRef from "./ForwardRef";

export default function UseRef() {
  let inputRef = useRef(null);
	function handleInput(){
		inputRef.current.value="1000";
	}
  let inputforRef = useRef(null);
	function handleforInput(){
		inputforRef.current.value="2000";
    inputforRef.current.focus();
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
      <ForwardRef ref={inputforRef} />
			<Button className="btn btn-sm me-2" onClick={handleInput}>Handle input</Button>
			<Button className="btn btn-sm" onClick={handleforInput}>Forward Ref</Button>
    </>
  );
}
