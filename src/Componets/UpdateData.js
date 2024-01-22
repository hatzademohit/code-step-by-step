import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function UpdateData() {
  const [data, setData] = useState(0);
  function UpdateData() {
    setData(data + 1);
  }
  return (
    <>
      <h5>{data}</h5>
      <Button className="btn btn-sm btn-info" onClick={UpdateData}>
        Update Data
      </Button>
    </>
  );
}
