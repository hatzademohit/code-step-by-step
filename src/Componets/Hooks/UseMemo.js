import React, { useMemo, useState } from "react";
import { Button } from "react-bootstrap";

export default function UseMemo() {
  const [item, setItem] = useState(0);
  const [count, setCount] = useState(10);
  const multiCountMemo = useMemo(function MultiCount(){
    console.log('asd')
    return count * 5
  }, [count])
  return (
    <>
      <p>The item value is {item}</p>
      <p>The count value is {multiCountMemo}</p>
      <Button className="btn btn-sm me-2" onClick={() => setItem(item + 1)}>
        Item Increment
      </Button>
      <Button className="btn btn-sm" onClick={() => setCount(count + 1)}>
        Count Increment
      </Button>
    </>
  );
}
