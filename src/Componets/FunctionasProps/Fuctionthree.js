import React from "react";
import { Button } from "react-bootstrap";

export default function Fuctionthree(props) {
  return (
    <>
      <h6>Hello From function Three</h6>
      <Button className="btn btn-sm" onClick={props.fuctionName}>
        Call Fuction
      </Button>
    </>
  );
}
