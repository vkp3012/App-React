/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import logo from '../images/Vivek Patel-logos_white.png';

function footer() {
  return (
    <div class="footer">
       <div class="footer-section">
          <div class="logo-footer">
              <img src={logo} style={{width:"300px",height:"230px"}} / >
          </div>
          <div class="logo-footer-1">
              <p class="logo-hover"><i class="fa fa-instagram" aria-hidden="true"></i>&nbsp; Instagram</p>
              <p class="logo-hover"><i class="fa fa-linkedin-square" aria-hidden="true"></i>&nbsp;&nbsp;LinkedIn</p>
              <p class="logo-hover"><i class="fa fa-github" aria-hidden="true"></i>&nbsp;&nbsp; GitHub</p>
          </div>
          <div class="logo-footer-2">
            <h3 class="footer-details">My Contact Details</h3>
            <hr/>
            <ul class="site-contact-details">
                <li>
                  <span class="email"><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp; vivekece19@gmail.com</span>
                </li>
                <li>
                    <span><i class="fa fa-phone" aria-hidden="true"></i>&nbsp;&nbsp; +91, 9935162491</span>
                </li>
                <li>
                  <span>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp; Churamanpur,Post Bhulanpur PAC <br/> Varanasi Uttar Pradesh <br/> India, 221108
                  </span>
                </li>
            </ul>
          </div>
        </div>
        <footer>
            Copyright ©All rights reserved | This template is made with ❤️ by.
        </footer>
    </div>
  )
}

export default footer