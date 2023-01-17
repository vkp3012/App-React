/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './styles/navbar.css'
import { Link } from "react-router-dom"
import logo from './images/Vivek Patel-logos_white2.png'
import education from './education'
import Header from './header'
import project from './project'
import form from './form'

function navbar() {
  return (
    <div>
        <navbar>
            <div class = 'logo'>
                  <Link to="/" style={{textDecoration:"none",color:"White",display:"inline"}}>
                    <img src={logo} /> 
                        <span>{Header}</span>
                  </Link>
              </div>
            <div class = "nav">
                <div class="nav1">
                <Link to="/" style={{textDecoration:"none",color:"White",display:"inline"}}>
                      Home
                    <span>{Header}</span>
                  </Link>
                </div>
                <div class="nav1">
                  <Link to="/education" style={{textDecoration:"none",color:"White",display:"inline"}}>
                      Education
                    <span>{education}</span>
                  </Link>
                </div>
                <div class="nav1">
                  <Link to="/project" style={{textDecoration:"none",color:"White",display:"inline"}}>
                        Project
                      <span>{project}</span>
                    </Link>
                </div>
                <div class="nav1">Blog</div>
                <div class="nav1">
                  <Link to="/form" style={{textDecoration:"none",color:"White",display:"inline"}}>
                        Contect
                      <span>{form}</span>
                    </Link>
                </div>
            </div>
        </navbar>
    </div>
  )
}

export default navbar