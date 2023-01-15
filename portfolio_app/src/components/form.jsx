import React from 'react'
import './styles/form.css'

function form() {
  return (
    <div class="form">
            <section class="site-section" >
                <div class="container">
                    <div class="col-md-12 mb-5">
                        <div class="section-heading text-center">
                            <h2>Wanna <strong>Start Work</strong> With Me?</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <form action class="site-form">
                                <h3 class="mb">Get In Touch</h3>
                                <div class="form-group">
                                    <input type="text" class="form-control " placeholder="Your Name" />
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your Email" />
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your Phone" />
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" cols="30" rows="5" placeholder="Write a Message"></textarea>
                                </div>
                                <div class="form-group">
                                    <input type="submit" class="btn btn-primary" value="Send Message" />
                                </div>
                            </form>
                        </div>
                        <div class="col">
                            <h3 class="mb">My Contact Details</h3>
                            <ul class="site-contact-details mb-5">
                                <li>
                                    <span class="text-uppercase">Email</span><br/>
                                    vivekece19@gmail.com
                                </li>
                                <li>
                                    <span class="text-uppercase">Phone</span><br/>
                                    +91, 9935162491
                                </li>
                                <li><span class="text-uppercase">Address</span><br/>
                                        Churamanpur,Post Bhulanpur PAC <br/> Varanasi Uttar Pradesh 221108
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default form