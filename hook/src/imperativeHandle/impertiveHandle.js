import React, { useRef } from 'react'
import Button from './button';
const ImperativeHandle = () => {
    const buttonRef = useRef(null);
    return (
        <div>
            <button onClick={()=>{buttonRef.current.afterToggle()}}>Button From Parent</button>
            <Button ref={buttonRef}/>
        </div>
    )
}

export default ImperativeHandle
