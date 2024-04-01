import React,{useRef} from 'react'
import { Form, Button } from 'react-bootstrap'

export default function UncontrolledComponent() {
    let inputRef = useRef(null)
    function setUValue(){
      inputRef.current.value = '50'
    }
  return (
    <>
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Text Flied</Form.Label>
        <Form.Control
            type="text"
            placeholder="Enter user id"
            ref={inputRef}
        />
      </Form.Group>
      <Button onClick={setUValue}>Set value</Button>
    </>
  )
}
