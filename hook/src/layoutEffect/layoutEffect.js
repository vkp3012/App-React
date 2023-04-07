import React, { useEffect, useLayoutEffect, useRef } from 'react'

const LayoutEffect = () => {
const inputRef = useRef(null);

  useLayoutEffect(()=>{
    // console.log("UseLayoutEffect");
    console.log(inputRef.current.value);
  },[])

  useEffect(()=>{
    // console.log("UseEffect");
    inputRef.current.value = "Hello"
  },[])


  return (
    <div>
        <input  ref = {inputRef} value="PEDRO" />
    </div>
  )
}

export default LayoutEffect
