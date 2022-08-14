// import { StoreMallDirectory } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'

import { onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = React.createContext();

function AuthWrapper({children}) {

    const [user,setUser] = useState('');
    const [loading,setLoading] = useState(true);

    console.log("hello in auth wrapper");

    useEffect(() =>{
        onAuthStateChanged(auth,(user) => {
            console.log(" onAuthStateChanged called");
            if(user){
                setUser(user);
            }
        })
        setLoading(false);
    },[])

    //feature created...login
    function login(email,password) {
        return signInWithEmailAndPassword(auth, email,password)
    }

    //logout
    function logout() {
        return signOut(auth);
    }

    //forget password...
    function forgetPassword(email){
        return sendPasswordResetEmail(auth,email);
    }

    // store all feature i.e login,logout,user and forget password .
    const store = {
        login,
        user,
        logout,
        forgetPassword
    }


  return (
    <AuthContext.Provider value = {store}>
        { !loading && children}
    </AuthContext.Provider>
    
  )
  
}

export default AuthWrapper;