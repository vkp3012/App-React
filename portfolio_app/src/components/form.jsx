import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {service_id,temp,public_key}from '../secrects'
import './styles/form.css'

// npm i @emailjs/browser

const Contact = () => {
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
        <div class="styledContactForm">
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
            <div class="col">
                    <h3 class="mb">My Contact Details</h3>
                    <ul class="site-contact-details mb-9">
                        <li>
                            <span class="text-uppercase">Email</span><br/>
                                <span class="email"> vivekece19@gmail.com</span>
                        </li>
                        <li>
                            <span class="text-uppercase">Phone</span><br/>
                                +91, 9935162491
                        </li>
                        <li><span class="text-uppercase">Address</span><br/>
                                Churamanpur,Post Bhulanpur PAC <br/> Varanasi Uttar Pradesh <br/> India, 221108
                        </li>
                    </ul>
                </div>
        </div>
    );
};

export default Contact;

    