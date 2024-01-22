import React from 'react'
import Fuctiontwo from './Fuctiontwo'
import Fuctionthree from './Fuctionthree'

export default function FunctionAsProps() {

  function alertCall(){
    alert("Hello from function one")
  }

  return (
    <>
        <Fuctiontwo fuctionName={alertCall} />
        <Fuctionthree fuctionName={alertCall} />
    </>
  )
}
