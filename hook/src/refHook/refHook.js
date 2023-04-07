import React, { useRef } from 'react'

const RefHook = () => {
    const inputRef = useRef(null);

    const onClick = () => {
        console.log(inputRef.current.value);
        inputRef.current.focus();
        inputRef.current.value = "";
    }

    return (
        <div className='container-xxl justify-content-center'>
            <div className='row'>
                <div className='col-7'>
                    <h1>Login</h1>
                    <div className='d-flex row p-3'>
                        <input placeholder='User Name....' type="text" ref = {inputRef}/>
                        <input placeholder='Password....' type="text" ref = {inputRef}/>
                    </div>
                    <button onClick={onClick} className='l-5'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default RefHook
