import React from 'react'
import { Button } from 'react-bootstrap'

export default function Fuctiontwo(props) {
  return (
    <>
        <h6>Hello From function Two</h6>
        <Button className='btn btn-sm' onClick={props.fuctionName}>Call Fuction</Button>
    </>
  )
}
