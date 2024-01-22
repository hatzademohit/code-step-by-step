import React, { useState } from "react";

export default function Conditions() {
  const [login, setLogin] = useState(1);
  return (
    <>
      <h6>Ternary operator</h6>
      {/* if else */}
      {login ? <p>Your are login Successfully</p> : <p>Please login first</p>}
      {/* if else if */}
      {login === 1 ? (
        <p>Welcome User1</p>
      ) : login === 2 ? (
        <p>Welcome User2</p>
      ) : (
        <p>Welcome guest</p>
      )}
    </>
  );
}
