import React,{useState} from 'react'
import User from './User'
import { Button } from 'react-bootstrap'

export default function PreviousProps() {
 const [newcount, setnewCount] = useState(0)
  return (
    <div>
        <User count={newcount} />
        <Button size='sm' onClick={()=> setnewCount(Math.floor(Math.random()*10))}>Counter</Button>
    </div>
  )
}
