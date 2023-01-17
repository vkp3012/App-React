/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './styles/header.css'
import Form from './form'
import { Link } from "react-router-dom"
import name from './images/Vivek Patel-logos_black.png'
function Header() {
  return (
    <div>
          <header>
              <div class="content">
                      <h2>Hello I'm, <h1 class="name">Vivek Kumar Patel.</h1></h2><br/>
                      <p class="content1">A Web Developer activelly looking for a new possition. I love to explore <br/>new technologies and always try to enhance my skills through develop<br/> some projects.</p>
              </div>
          </header>
          <div class="container " style={{margin:"0",top:0}}>
            <div class="row align-items-center">
              <div class="col">
                <img src={name} alt="placeholder" class="img-fluid" />
              </div>
              <div class="col-lg-6 mb-5 ml-5">
                <div class="section-heading">
                  <h2>
                    About <strong>Me</strong>
                  </h2>
                </div>
                <p class="mb">
                  I am a passionate Full Stake Software developer and I interested
                  to study updated technologies and tackle complex problems. I
                  completed my Bachelors in Electronics and Communication Engineering. My
                  technical and management skills which will use to support the
                  growth of the organization as well as myself.
                </p>
                <p class="btn-1">
                  <a
                    href='./from.jsx'
                    class="btn btn-primary px-4 py-2 btn-sm smoothscroll"
                  >
                    <Link to="/form" style={{textDecoration:"none",color:"White",display:"inline"}}>
                          Hire Me
                        <span>{Form}</span>
                      </Link>
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1DWEG4xb_DakS6EXtLTZVN86jylctulBR/view"
                    class="btn btn-primary px-4 py-2 btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </a>
                </p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Header