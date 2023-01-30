import React, { useRef } from 'react'
import emailjs from "@emailjs/browser";
import {service_id,temp,public_key}from '../../secrects'
import './form.css';

const Form = () => {
  const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            service_id,
            temp,
            form.current,
            public_key
        )
        .then(
            (result) => {
              alert("send Email")
              console.log(result.text);
              console.log("message sent");
            },
            (error) => {
              alert("check your email.")
              console.log(error.text);
            }
        );
    };

  return (
    <div class="contect">
        <div class="contect-form">
          <h1>Wanna Start Work With Me?</h1>
          <hr/>
          <form ref={form} onSubmit={sendEmail} class="form">
              <label>Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
                <input 
                  type="text" 
                  name="user_name" 
                />
              <label>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
                <input 
                  type="email" 
                  name="user_email" 
                  required
                  placeholder="username@beststartupever.com"
                  pattern=".+@gmail\outlook\beststartupever\.com"
                  title="Please provide only a Best Startup Ever corporate email address"   
                />
              <label>Message &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
                <textarea name="message" />
              <input type="submit" value="Send" />
          </form>
        </div>
      <div class="contect-detalies">
      <h3 class="mb-2">My Contact Details</h3>
      <hr/>
        <ul class="site-contact-details" style={{color:"black",padding:"20px 0"}}>
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

      <h3 class="mb-2">Social Media</h3>
      <hr/>
      <p class="social-media" style={{padding:"20px 10px"}}>
        <p class="logo-hover"><i class="fa fa-instagram" aria-hidden="true"></i>&nbsp; Instagram</p>
        <p class="logo-hover"><i class="fa fa-linkedin-square" aria-hidden="true"></i>&nbsp;&nbsp;LinkedIn</p>
        <p class="logo-hover"><i class="fa fa-github" aria-hidden="true"></i>&nbsp;&nbsp; GitHub</p>
      </p>
      </div>
    </div>
  )
}

export default Form