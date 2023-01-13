/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import avatar from './images/avatar.png'
import './styles/header.css'
import Form from './form'
function Header() {

  return (
    <div>
          <header>
              <div class="content">
                      <h2>Hello I'm <h1>Vivek Kumar Patel.</h1></h2><br/>
                      <p class="content1">A Web Developer activelly looking for a new possition. <br/>I love to explore new technologies and always try to enhance my skills through develop some projects.</p>
              </div>
              <div class='avatar' >
                  <img src={avatar} class='avatar1'></img>
              </div>
          </header>
          <Form />
    </div>
  )
}

export default Header