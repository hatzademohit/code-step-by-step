import React,{forwardRef} from 'react'
import { Form } from 'react-bootstrap'

function ForwardRef(props, ref) {
  return (
    <Form.Group className="mb-2">
      <Form.Label>Forward ref Input</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter user id"
        ref={ref}
      />
    </Form.Group>
  )
}

export default forwardRef(ForwardRef);