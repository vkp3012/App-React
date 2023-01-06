import React from 'react'
import '../styles/login.css'
import avatar from '../images/avatar.jpg'

function login() {
    return (
        <div class= "login-page" >
            <div class= "login">
            <div class = "avatar">
                <img src= {avatar} />
            </div>
            <h2>Login</h2>
            <h3> Welcome to my Book Shop </h3>
            <form class = 'login-form'>
                <div class='textbox'>
                    <input type='email' placeholder='UserName or Email' />
                    <span class = 'material-symbols-outlined'>
                        account_circle
                    </span>
                </div>
                <div class='textbox'>
                    <input type='password' placeholder='password' />
                    <span class = 'material-symbols-outlined'>
                        lock
                    </span>
                </div>
                
                <button type='submit'>LOGIN</button>
                <a href='#'>
                    Forget your credentials
                </a>
            </form>
        </div>
        </div>
    )
}

export default login