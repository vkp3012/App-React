import React from 'react'
import { Link } from 'react-router-dom'
import Statehook from '../stateHook/statehook';
const Navbar = () => {
    return (
        <div style={{display:"flex",flexDirection:"row",justifyContent:'space-between',textAlign:"center",background:"blue",color:"white",height:"10vh"}}>
            <h1 style={{padding:"20px"}}>Hook Study Material</h1>
            <div>
                <ul style={{padding:"30px 50px",fontSize:"30px",fontWeight:"700"}}>
                    <Link to = "/" style={{textDecoration: "none" ,color:"white"}}>
                        UseState
                        <span>{Statehook} </span>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
