import React, { useContext } from 'react'
import { AuthContext } from '../context/auth'
import Profile from '../components/Profile';
import { useRouter } from "next/router";

function profile() {
    const { user } = useContext(AuthContext);

    const Redirect = () => {
        const router = useRouter();
        router.push("/login");
        return null;
    }
  return (
    //this component will only be visible when we are logged in , so a protect route will be wrapped
      <>
        {user?.uid?
        <Profile/> :<Redirect/>}
      </>
  )
}

export default profile