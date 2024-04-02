import React,{useRef, useEffect} from 'react'

export default function User(props) {
  let lastVal = useRef();
  useEffect(()=>{
    lastVal.current = props.count
  })
  const previousProps = lastVal.current
  
  return (
    <>
        <p>Curent Conut Value {props.count}</p>
        <p>Past Conut Value {previousProps}</p>
    </>
  )
}
