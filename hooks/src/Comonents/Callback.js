import React, { useCallback, useState } from 'react'
import axios from 'axios'
import Child from './Child'


function Callback() {
    const [toggle,setToggle] = useState(false);
    const [data,setData] = useState("Yo,Pls sub to mu channel!")

    const returnContext = useCallback(
        (name) => {
            return data + name;
        },
        [data]
    )

  return (
    <div className='App'>
        <Child returnContext = {returnContext}/>

        <button
            onClick={()=>{
                setToggle(!toggle)
            }}
        >
            {""}
            Toggle
        </button>

        {toggle && <h1>toggle</h1>}
    </div>
  )
}

export default Callback