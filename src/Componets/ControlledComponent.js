import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export default function ControlledComponent() {
	let [val, setVal] = useState(20)
	function SetCvalue(){
		setVal(50)
	}
	return (
		<>
			<Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
			<Form.Label>Text Flied</Form.Label>
			<Form.Control
				type="text"
				placeholder="Enter user id"
				value={val}
				onChange={(e)=> setVal(e.target.value)}
			/>
			</Form.Group>
			<Button onClick={SetCvalue}>Set Value</Button>
		</>
	)
}
