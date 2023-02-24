import React from 'react'
import { Link } from "react-router-dom";
import { BsLinkedin,BsGithub, BsFillTelephoneFill,BsTwitter} from "react-icons/bs"
import {AiFillMail,AiOutlineHome} from "react-icons/ai"
const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer-wrapper-1'>
            <div className='container-xxl'>
              <div className=' d-flex align-items-center p-md-3'>
                  <Link
                      to ="/"
                      className='text-white d-flex'
                  >
                    <h4 className = "fs-1 text-white">Vivek</h4><h4 className = "fs-1" style={{color:"red"}}>Patel</h4>
                  </Link>
              </div>
            </div>
          </div>
      </footer>

      <footer className='footer-wrapper'>
      <div className='container-xxl p-3'> 
        <div className='row footer-detailes'>
          <div className='col-3 footer-detailes'>
            <h4 className='text-white mb-4'>Information</h4>
            <div className='text-white footer-link d-flex flex-column'>
              <a href='#pp' alt="linkedin" className="text-white py-2 mb-1">Privacy Policy</a>
              <a href='#b' alt="github" className="text-white py-2 mb-1">Blogs</a>
              <a href='#TAC' alt="twitter" className="text-white py-2 mb-1">Term and Condition</a>
            </div>
          </div>
          <div className='col-3 footer-detailes'>
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1' to="/about" >About Us</Link>
                <Link className='text-white py-2 mb-1'>Faq</Link>
                <Link className='text-white py-2 mb-1' to="/contact" >Contact</Link>
            </div>
          </div>
          <div className='col-3 footer-detailes'>
            <h4 className='text-white mb-4'>Social Media</h4>
            <div className='footer-link d-flex flex-column text-white'>
              <a href='https://www.linkedin.com/in/vkp9935/' alt="linkedin" className="text-white py-2 mb-1"><BsLinkedin/>&nbsp;&nbsp;Linkedin</a>
              <a href='https://github.com/vkp3012' alt="github"className="text-white py-2 mb-1"><BsGithub/>&nbsp;&nbsp;GitHub</a>
              <a href='https://twitter.com/vivekpatel_er' alt="twitter" className="text-white py-2 mb-1"><BsTwitter/>&nbsp;&nbsp;Twitter</a>
            </div>
          </div>
          <div className='col-3 footer-detailes'>
          <h4 className = "text-white mb-4">Contact Us</h4>
            <div className='footer-link d-flex flex-column'>
                <address className='text-white fs-6 flex-wrap py-2 mb-1'>
                <AiOutlineHome style={{color:"white"}}/> &nbsp;
                    Churamanpur Post Bullanpur PAC Varanasi UP 
                    PinCode : 221108 
                </address>
                <a
                    href='tel: +91 9935162491'
                    className='mt-3 d-block mb-1 text-white py-2 mb-1'
                >
                  <BsFillTelephoneFill/>&nbsp;
                    +91, 99935162491
                </a>
                <a 
                    href='mailto : vivekece1116@gmail.com'
                    className='mt-2 d-block mb-0 text-white py-2 mb-1'    
                >
                  <AiFillMail/>&nbsp;
                    vivekece1116@gmail.com
                </a>
              </div>
          </div>
        </div>
      </div>
      </footer>

      <footer className='mb-0 footer-wrapper'>
        <div className='d-flex justify-content-center align-items-center footer-wrapper' >
          <p className="text-center text-white">
              &copy; 📆|| 2022 - { new Date().getFullYear()} ||  Powered by Developer's Corner
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
