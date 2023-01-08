import React from 'react'
import { Link } from 'react-router-dom'
import login from '../loginpage/login'
import home from './home'
import favorite from './favorite'
import '../styles/nav.css'
function navbar() {
  return (
    <navbar>
        <div class='nav'>
            <Link to = '/' style={{ textDecoration: "none" ,color:"White",display:"inline",padding:"1rem"}}>
                    Home
                <span>{home}</span>
            </Link>
            <Link to = '/favorite' style={{ textDecoration: "none" ,color:"White",padding:"1rem"}}>
                    Favorite
                <span>{favorite}</span>
            </Link>
        </div>
        <div class="log1">
            <button className='log'>
                <Link to = '/login' style={{ textDecoration: "none",color:"white"}}>
                        Login
                    <span>{login}</span>
                </Link>
            </button>
        </div>
        

    </navbar>
    )
}

export default navbar