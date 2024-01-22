import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function UseEffect() {
  useEffect(() => {
    console.log("hello from useeffect");
  });
  const [count, setCount] = useState(1);
  return (
    <>
      <p>
        <b>Count: </b>
        {count}
      </p>
      <Button
        className="btn btn-sm btnsecondary"
        onClick={() => setCount(count + 1)}
      >
        Count Increment
      </Button>
    </>
  );
}
