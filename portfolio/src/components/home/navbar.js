import React from 'react'
import { Link } from "react-router-dom"
import education from '../education/education'
import Header from './header'
import project from '../project/project'
import form from '../contect/form'
import './style.css'

function navbar() {
  return (
    <div class="nav-bar">
        <div class="fa-ul" >
            <Link to="/" class="logo" style={{textDecoration:"none"}}>
                    <span class="logo"> 
                        <li><i class="fa fa-vimeo" aria-hidden="true"></i></li>
                        <li><i class="fa fa-pinterest-p" aria-hidden="true"></i></li>
                        &nbsp;&nbsp;<hr/>&nbsp;&nbsp;<h4>Vivek Patel</h4>
                    </span>
            </Link>
        </div>
        <div class="nav-bar-1">
            <div class="nav1">
                <Link to="/" style={{textDecoration:"none"}}  class="nav-heading">
                    Home
                <span>{Header}</span>
                </Link>
            </div>


            <div class="nav1">
                <Link to="/education" style={{textDecoration:"none"}}  class="nav-heading">
                    Education
                <span>{education}</span>
                </Link>
            </div>


            <div class="nav1">
                <Link to="/project" style={{textDecoration:"none"}}  class="nav-heading">
                    Project
                    <span>{project}</span>
                </Link>
            </div>

            <div class="nav1">
                <Link to="/form" style={{textDecoration:"none"}} class="nav-heading">
                    Contect
                    <span>{form}</span>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default navbar