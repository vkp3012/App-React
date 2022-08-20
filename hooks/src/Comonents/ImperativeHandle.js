import React, { useRef } from 'react'
import Button from './Button'

function ImperativeHandle() {
    const ButtonRef = useRef(null);
  return (
    <div>
        <button 
            onClick={()=>{
                ButtonRef.current.alterToggle();
            }}
        >
            Button From Parent
        </button>
        <Button ref={ButtonRef}/>
    </div>
  )
}

export default ImperativeHandle