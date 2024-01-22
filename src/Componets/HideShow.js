import React, { useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
export default function HideShow() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show ? <p>Hello I am Mohit</p> : null}
      <ButtonGroup>
        <Button
          className="btn btn-sm"
          variant="outline-info"
          onClick={() => setShow(true)}
        >
          Show Text
        </Button>
        <Button
          className="btn btn-sm"
          variant="outline-info"
          onClick={() => setShow(false)}
        >
          Hide Text
        </Button>
        <Button
          className="btn btn-sm"
          variant="outline-info"
          onClick={() => setShow(!show)}
        >
          Toggle Text
        </Button>
      </ButtonGroup>
    </>
  );
}
