import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function UseState() {
  const [name, setName] = useState("Mohit");
  return (
    <>
      <p>My Name is {name}</p>
      <Button
        className="btn btn-sm btn-secondary"
        onClick={() => setName("Rohit")}
      >
        Change State
      </Button>
    </>
  );
}
