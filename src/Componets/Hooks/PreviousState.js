import React,{useState} from "react";
import { Button } from "react-bootstrap";

export default function PreviousState() {
  const [count, setCount] = useState(1)
  function updateConter() {
    let random = Math.floor(Math.random()*10);
    setCount((prevValue)=>{
        alert(prevValue)
        return random;
    })
  }
  return (
    <>
      <p>Conueter Updating {count}</p>
      <Button size="sm" onClick={updateConter}>Click here for counder update</Button>
    </>
  );
}
