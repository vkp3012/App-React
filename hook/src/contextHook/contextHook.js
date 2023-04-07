import React, { useState,createContext } from 'react'
import Login from './login'
import User from './user'

export const AppContext = createContext(null);                              
const ContextHook = () => {
    const [userName,setUserName] = useState("")
    return (
        <div>
            <AppContext.Provider value={{userName,setUserName}}>
                <Login />
                <User/>
            </AppContext.Provider>
        </div>
    )
}

export default ContextHook
