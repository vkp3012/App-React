/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from "react-router-dom"
import education from '../education/education'
import Header from './header'
import project from '../project/project'
import form from '../contect/form'
import './style.css'

function navbar() {
    return (
        // <div class="nav-bar">
        //     <div class="fa-ul" >
        //         <Link to="/" class="logo" style={{textDecoration:"none"}}>
        //                 <span class="logo"> 
        //                     <li><i class="fa fa-vimeo" aria-hidden="true"></i></li>
        //                     <li><i class="fa fa-pinterest-p" aria-hidden="true"></i></li>
        //                     &nbsp;&nbsp;<hr/>&nbsp;&nbsp;<h4>Vivek Patel</h4>
        //                 </span>
        //         </Link>
        //     </div>
        //     <input id="menu-toggle" type="checkbox" />
        //     <label class='menu-button-container' for="menu-toggle">
        //         <div class='menu-button'></div>
        //     </label>
        //         <div class="nav-bar-1">
        //             <div class="nav1">
        //                 <Link to="/" style={{textDecoration:"none"}}  class="nav-heading">
        //                     Home
        //                 <span>{Header}</span>
        //                 </Link>
        //             </div>


        //             <div class="nav1">
        //                 <Link to="/education" style={{textDecoration:"none"}}  class="nav-heading">
        //                     Education
        //                 <span>{education}</span>
        //                 </Link>
        //             </div>


        //             <div class="nav1">
        //                 <Link to="/project" style={{textDecoration:"none"}}  class="nav-heading">
        //                     Project
        //                     <span>{project}</span>
        //                 </Link>
        //             </div>

        //             <div class="nav1">
        //                 <Link to="/form" style={{textDecoration:"none"}} class="nav-heading">
        //                     Contect
        //                     <span>{form}</span>
        //                 </Link>
        //             </div>
        //         </div>
        // </div>
        <nav class="navbar navbar-expand-lg bg-primary fixed-top">
            <div class="container-fluid bg-primary">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand " href="#">
                    <Link to="/" class="logo" style={{textDecoration:"none" ,display:"flex",color:"white",flexDirection:"row"}}>
                        <span class="logo" style={{listStyle:"none",display:"flex",flexDirection:"row"}}> 
                            <li><i class="fa fa-vimeo" aria-hidden="true"></i></li>
                            <li><i class="fa fa-pinterest-p" aria-hidden="true"></i></li>
                        </span>
                    </Link>
                </a>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                <Link to="/" style={{textDecoration:"none",color:"white",}}  class="nav-heading">
                                    Home
                                    <span>{Header}</span>
                                </Link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <Link to="/education" style={{textDecoration:"none",color:"white",}}  class="nav-heading">
                                    Education
                                    <span>{education}</span>
                                </Link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">
                            <Link to="/project" style={{textDecoration:"none",color:"white",}}  class="nav-heading">
                                Project
                                <span>{project}</span>
                            </Link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">
                            <Link to="/form" style={{textDecoration:"none",color:"white",}} class="nav-heading">
                                Contect
                                <span>{form}</span>
                            </Link>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default navbar