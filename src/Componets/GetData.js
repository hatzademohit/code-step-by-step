import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function GetData() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function getData(val) {
    setData(val.target.value);
    setPrint(false);
  }
  return (
    <>
      {print ? <p>{data}</p> : null}
      <input type="text" className="form-control" onChange={getData} />
      <Button
        className="btn btn-sm btn-info mt-1"
        onClick={() => setPrint(true)}
      >
        Get data
      </Button>
    </>
  );
}
