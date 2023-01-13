/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './styles/navbar.css'
import logo from './images/Vivek Patel-logos_white2.png'
function navbar() {
  return (
    <div>
        <navbar>
            <div class = 'logo'> <img src={logo} ></img></div>
            <div class = "nav">
                <div class="nav1">Home</div>
                <div class="nav1">Education</div>
                <div class="nav1">Project</div>
                <div class="nav1">Contect</div>
            </div>
        </navbar>
    </div>
  )
}

export default navbar