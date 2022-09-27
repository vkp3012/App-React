import React from 'react'
import Login from './Login'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <footer>
                <div class="footer0">
                    <h1>ShoPperZ</h1>
                </div>
                <div class="footer1 ">
                    Connect with us at<div class="social-media">
                        <a href="#">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                        <a href="#">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                        <a href="#">
                            <ion-icon name="logo-youtube"></ion-icon>
                        </a>
                        <a href="#">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                        <a href="#">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </div>
                </div>
                <div class="footer2">
                    <div class="product">
                        <div class="heading">Products</div>
                        <div class="div">Sell your Products</div>
                        <div class="div">Advertise</div>
                        <div class="div">Pricing</div>
                        <div class="div">Product Buisness</div>
                    </div>
                    <div class="services">
                        <div class="heading">Services</div>
                        <div class="div">Return</div>
                        <div class="div">Cash Back</div>
                        <div class="div">Affiliate Marketing</div>
                        <div class="div">Others</div>
                    </div>
                    <div class="Company">
                        <div class="heading">Company</div>
                        <div class="div">Complaint</div>
                        <div class="div">Careers</div>
                        <div class="div">Affiliate Marketing</div>
                        <div class="div">Support</div>
                    </div>
                    <div class="Get Help">
                        <div class="heading">Get Help</div>
                        <div class="div">Help Center</div>
                        <div class="div">Privacy Policy</div>
                        <div class="div">Terms</div>

                        <Link to="/login" style={{ textDecoration: "none",color:"white" }}>
                        <div class="div">Login</div>
                        </Link>
                    </div>
                </div>
                <div class="footer3">Copyright © <h4>ShoPperZ</h4> 2021-2028</div>
            </footer>
        </div>
    )
}

export default Footer