/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
// import avatar from './images/avatar.png'
import './styles/header.css'
import Form from './form'
import { Link } from "react-router-dom"
import name from './images/Vivek Patel-logos_black.png'
function Header() {

  return (
    <div>
          <header>
              <div class="content">
                      <h2>Hello I'm <h1>Vivek Kumar Patel.</h1></h2><br/>
                      <p class="content1">A Web Developer activelly looking <br/> for a new possition. I love to explore <br/>new technologies and always try to<br/> enhance my skills through develop<br/> some projects.</p>
              </div>
              {/* <div class='avatar' >
                  <img src={avatar} class='avatar1'></img>
              </div> */}
          </header>
          <div class="container " style={{margin:"0",top:0}}>
            <div class="row align-items-center">
              <div class="col-lg-7 pr-lg-5  mb-lg-0">
                <img src={name} alt="placeholder" class="img-fluid" />
              </div>
            <div class="col-lg-5">
              <div class="section-heading">
                <h2>
                  About <strong>Me</strong>
                </h2>
              </div>
              <p class="mb-5">
                I am a passionate Full Stake Software developer and I interested
                to study updated technologies and tackle complex problems. I
                completed my Bachelors in Electronics and Communication Engineering. My
                technical and management skills which will use to support the
                growth of the organization as well as myself.
              </p>
              <p>
                <a
                  href='./about.js'
                  class="btn btn-primary px-4 py-2 btn-sm smoothscroll"
                >
                  <Link to="/form" style={{textDecoration:"none",color:"White",display:"inline"}}>
                        Hire Me
                      <span>{Form}</span>
                    </Link>
                </a>
                <a
                  href="#s"
                  class="btn btn-secondary px-4 py-2 btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </p>
            </div>
          </div>
      </div>
      {/* <div class="form-section">
          <Form />
      </div> */}
    </div>
  )
}

export default Header