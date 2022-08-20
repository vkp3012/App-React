import React, { useRef } from 'react'

function Ref() {
    const inputRef = useRef(NaN);

    const onClick = () =>{
        console.log(inputRef.current.value);
    }

  return (
    <div>
        <h1>
            Pedro
        </h1>

        <input placeholder='Write something...' ref={inputRef}/>
        <button onClick={onClick}>Change Name</button>
    </div>
  )
}

export default Ref