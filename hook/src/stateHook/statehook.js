import React, { useState } from 'react'

const Statehook = () => {
  const [count,setCount] = useState(0)
  const [count1,setCount1] = useState(0)
  const [value,setValue] = useState("Hello Coder...")
  const [showText,setShowText] = useState(true);

  const inc = () => {
    setCount(count+1);
  }

  const dec = () => {
    if(count === 0){
      return 0;
    }

    setCount(count-1);
  };

  const onChange =(event) => {
    const newValue = event.target.value;
    setValue(newValue);
  }

  return (
    <div className='container-xxl'>
      <div className='row'>
        <h1>State Hook using onClick Options</h1>
        <div className='d-flex align-items-center p-3'>
          <button type='number' onClick={inc}>increment</button>
          <h2 className='p-5'>{count}</h2>
          <button type='number' onClick={dec}>decrement</button>
        </div>
      </div>

      <div>
        <h1>
          State Hooks using onChange Options
        </h1>
          <div>
            {/* <input placeholder='type some Things....' onChange={(event)=>setValue(event.target.value)}/> */}
            <input placeholder='type some Things....' onChange={onChange}/>
            <h4 className='p-4'>{value}</h4>
          </div>
      </div>

      <div className='row'>
            <h1>{count1}</h1>
            <button
                onClick={()=>{
                    setCount1(count1+1);
                    setShowText(!showText)
                }}
            >
                Click Here
            </button>
            { showText && <p className='fs-3 p-5 fw-bold'>This is a text</p>}
        </div>
    </div>
  )
}

export default Statehook
