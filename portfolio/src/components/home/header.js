import React from 'react'
import {Link} from 'react-router-dom'
import Form from '../contect/form'
import name from '../images/Vivek Patel-logos_black.png'

function header() {
  return (
    <div>
      <div class="content">
        <div class="content1">
          <h2>Hello ✋ I'm, <h1 class="name">Vivek Kumar Patel.<hr/></h1></h2><br/>
          <p class="content-1">
            "A Web Developer activelly looking for a new possition. I love to explore<br/>
            new technologies and always try to enhance my skills through develop<br/> 
            some projects.I am a passionate Full Stake Software developer and <br/> 
            I interested to study updated technologies and tackle complex problems."
          </p>
        </div>
      </div>
      <div class="content2">
        <div class="cotent-2 col-5">
          <img src={name} alt="placeholder" class="img-fluid"  style={{width:"300px"}}/>
        </div>
        <div class="content-2">
          <div class="section-heading">
            <h2>
              About <strong>Me</strong><hr/>
            </h2>
          </div>
          <p class="mb">
            I am a passionate Full Stake Software developer and I interested
            to study updated technologies and tackle complex problems. I
            completed my Bachelors in Electronics and Communication Engineering. My
            technical and management skills which will use to support the
            growth of the organization as well as myself.
          </p>
            <div class="d-grid gap-2 d-md-block">
              <button class="btn btn-primary" type="button">
                <a
                  href='../contect/form.js'
                  style={{textDecoration:"none",display:"inline", color:"white"}}
                >
                  <Link to="/form" style={{textDecoration:"none" ,display:"inline",color:"white"}}>
                        Hire Me
                      <span>{Form}</span>
                  </Link>
                </a>
              </button>
              <button class="btn btn-primary" type="button">
                <a
                  href="https://drive.google.com/file/d/1DWEG4xb_DakS6EXtLTZVN86jylctulBR/view"
                  rel="noopener noreferrer"
                  style={{textDecoration:"none",display:"inline", color:"white",width:"40%"}}
                >
                  Download CV <i class="fa fa-download" aria-hidden="true"></i>
                </a>
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default header