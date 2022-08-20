import React, { useEffect, useLayoutEffect, useRef } from 'react'

function LayoutEffect() {
    const inputRef = useRef(null);

    useLayoutEffect(()=>{
        console.log(inputRef.current.value);
    },[])

    useEffect(()=>{
        inputRef.current.value = "Hello";
    },[])

  return (
    <div className='App'>
        <input ref={inputRef} value="Pedro" style={{width:400,heigth:200}}/>
    </div>
  )
}

export default LayoutEffect