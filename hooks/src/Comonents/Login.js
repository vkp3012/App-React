import React,{useContext} from 'react'
import {AppContext} from './Context'

// function Login({setUserName}) {
function Login() {
    const {setUserName} = useContext(AppContext)
  return (
    <div>
        <input
            onChange={(event)=>{
                setUserName(event.target.value);
            }}
        />
    </div>
  )
}

export default Login