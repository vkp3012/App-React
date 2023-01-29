import React, { useRef } from 'react'
import emailjs from "@emailjs/browser";
import {service_id,temp,public_key}from '../../secrects'

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
            console.log(result.text);
            console.log("message sent");
            },
            (error) => {
            console.log(error.text);
            }
        );
    };

  return (
    <div>
      <div>
        <div>
          <h1>Wanna Start Work With Me?</h1>
          <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
          </form>
        </div>
      </div>
      <div>
      <h3 class="mb">My Contact Details</h3>
        <ul class="site-contact-details mb-9" >
            <li>
                <span class="text-uppercase" style={{color:"black"}}>Email</span><br/>
                    <span class="email" style={{color:"black"}}> vivekece19@gmail.com</span>
            </li>
            <li>
                <span class="text-uppercase" style={{color:"black"}}>Phone</span><br/>
                <span style={{color:"black"}}>+91, 9935162491</span>
            </li>
            <li><span class="text-uppercase" style={{color:"black"}}>Address</span><br/>
            <span style={{color:"black"}}>
                Churamanpur,Post Bhulanpur PAC <br/> Varanasi Uttar Pradesh <br/> India, 221108
            </span>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Form