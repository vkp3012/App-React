/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useRef } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from "../components/BreadCrumb";
import emailjs from "@emailjs/browser";
import {service_id,temp,public_key} from '../secrects'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(
      service_id,
      temp,
      e.target,
      public_key
    )
    .then(
      (result) => {
        alert("send Email")
        console.log(result.text);
        console.log("message sent");
      },
      (error) => {
        alert("check your Email")
        console.log(error.text);
      }
    );
    e.target.reset();
  }

  return (
    <div>
      <Meta title={'Contact'} />
      <BreadCrumb title=" Contect" />

      <div className='contect-wrapper home-wrapper'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12 py-4'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14428.343966240212!2d82.93917022316772!3d25.301314791563605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x398e3283c408381f%3A0x21232b7663c2bd03!2sLohta%20Bazar%2C%20Varanasi%2C%20Uttar%20Pradesh%20221107!3m2!1d25.300579!2d82.94381969999999!5e0!3m2!1sen!2sin!4v1676351067074!5m2!1sen!2sin"
                width="600"
                height="450"
                class="border-0 w-100"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                alt="map"
              >

              </iframe>
            </div>
          </div>
        </div>
      </div>

      <div className='contect-wrapper home-wrapper'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='d-flex-col align-contect-center justify-content-center py-4'>
                <h3 className=''>Message Me</h3>
                <form action className='d-flex flex-column gap-15' ref={form} onSubmit={sendEmail}>
                  <div>
                    <input placeholder='Name' name="name" type="text" className='form-control'></input>
                  </div>
                  <div>
                    <input placeholder='Email'  name="email" type="text" className='form-control'></input>
                  </div>
                  <div>
                    <input placeholder='Subject'  name="subject" type="text" className='form-control'></input>
                  </div>
                  <div>
                    <input placeholder='Phone No.'  name="phoneNo" type="text" className='form-control'></input>
                  </div>                
                  <div>
                    <textarea placeholder='write a something...' name="message" className='form-control'></textarea>
                  </div>
                  <div className='d-flex justify-content-center align-ite"ms-center gap-30 py-3'>
                    <input className='button gap-30' type="submit" value="Send"
                        Submit
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className='col-6'>
              <div>
                <h3 class="contect-title mb-4 text-center">Get in Touch With us</h3>
                <div className='text-center ps-5'>
                  <ul class="ps-0">
                    <li class="mb-3 d-flex gap-15 align-content-center">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="fs-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
                      </svg>
                      <address>Hn : Churamanpur Post Bhullanpr PAC Varanasi UP</address>
                    </li>
                    <li class="mb-3 d-flex gap-15 align-content-center">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="fs-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"></path>
                        <path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path>
                      </svg>
                      <a href="tel: +91 9935162491" alt="tel" className='text-dark'>+91 9935162491</a>
                    </li>
                    <li class="mb-3 d-flex gap-15 align-content-center">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="fs-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
                      </svg>
                      <a href="mailto : vivekece1116@hmail.com" alt="mail" className='text-dark'>vivekece1116@gmail.com</a>
                    </li>
                    <li class="mb-3 d-flex gap-15 align-content-center">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="fs-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                        <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
                      </svg>
                      <p class="mb-0">Monday – Friday 10 AM – 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
