import React,{useState, useEffect} from "react";
import { Button } from "react-bootstrap";

export default function UseEffectwithSP() {
  const [data, setData] = useState(10)
  const [count, setCount] = useState(20)
  useEffect(()=>{
    console.log("Data " + data)
  },[data]);

  useEffect(() => {
    console.log("Count " + count)
  },[count]);
  return (
    <>
      <p>Data: {data} and Count: {count}</p>
      <Button className="btn btn-sm btn-secondary me-2" onClick={()=> setData(data + 1)}>Set Data</Button>
      <Button className="btn btn-sm btn-secondary" onClick={()=>setCount(count + 1)}>Set Count</Button>
    </>
  );
}