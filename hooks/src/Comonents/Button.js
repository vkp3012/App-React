import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Button = forwardRef((props,ref) => {
     
    const [toggle,setToggle] = useState(false);

    useImperativeHandle(ref,()=>({
        alterToggle() {
            setToggle(!toggle);
        },
    }));

  return (
    <>
        <button>
            Button From Child
        </button>

        {toggle && <span>Taggle</span>}
    </>
  );
});

export default Button