import React, { useState } from 'react'

function Us2() {
    const [input,setInput] = useState("Pesodo");

    let onchange = (event) => {
        const newvalue = event.target.value;
        setInput(newvalue);
    }
    
  return (
    <div>
        {input}
        <input placeholder='write some thing...' onChange={onchange}/>
    </div>
  )
}

export default Us2