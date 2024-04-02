import React,{ useState } from 'react'
import { Form } from 'react-bootstrap'

export default function SateObjetWithHook() {
  const [data, setData] = useState({name: 'Mohit', lastName: 'Hatzade'})
  return (
    <>
      <p>Name : {data.name}</p>
      <p>Last Name : {data.lastName}</p>
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
        <Form.Control
            type="text"
            placeholder="Enter Name"
            value={data.name}
            // onChange={(e)=> setData({name: e.target.value, lastName: data.lastName})} // first Method
            onChange={(e)=> setData({...data, name: e.target.value})} // Second Method
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
        <Form.Control
            type="text"
            placeholder="Enter Last Name"
            value={data.lastName}
            // onChange={(e)=> setData({lastName: e.target.value, name: data.name})} // First Methid
            onChange={(e)=> setData({...data, lastName: e.target.value})} // Second Method
        />
      </Form.Group>
    </>
  )
}
