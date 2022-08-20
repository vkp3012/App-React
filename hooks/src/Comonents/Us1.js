import React, { useState } from 'react'

function Us1() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {

        //do not give negative number...
        if(counter === 0){
            return 0;
        }

        setCounter(counter -1);
    }

  return (
    <div style={{display:"flex",margin:"1rem",padding:"2rem",flexdirection:"column"}}>
        
        <button onClick={increment}>Increment</button>

            {counter}
        
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Us1