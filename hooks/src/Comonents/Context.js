import React, { createContext, useState } from 'react'
import User from './User'
import Login from './Login'

export const AppContext = createContext(null);

function Context() {
    const [userName,setUserName] = useState("");

  return (
    <div>
        {/* <Login setUserName={setUserName}/><User userName={userName}/> */}
        <AppContext.Provider value={{userName,setUserName}}>
            <Login/> <User/>
        </AppContext.Provider>
    </div>
  )
}

export default Context