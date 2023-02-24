import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from "../components/BreadCrumb"
const About = () => {
  return (
    <>
      <Meta title={'About'}/>
      <BreadCrumb title = "About" />

      <div className='conect-wrapper home-wrapper'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h1 className='text-center pt-2'>Project Information</h1>
              <hr/>
            </div>
          </div>
        </div>
      </div>

      <div className='conect-wrapper home-wrapper'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h4 className='pt-2'>Using Tool in This Project</h4>
              <div>
                <ul>
                  <li>React</li>
                  <li>BootStrap</li>
                  <li>EmailJS</li>
                  <li>React Router Dom</li>
                  <li>React Helmet</li>
                  <li>React Icons</li>
                  <li>React Redux</li>
                </ul>
              </div>
              <hr/>

              <h4 className='pt-2'>Project Details</h4>
              <p className='fs-4 w-100 ps-5'>
                Hello, I'm Vivek Kumar Patel.I'm from Varanasi Uttar Pardesh , 221107. I have done my B.Tech From United College of Engineering and Resarch Allahabad in 2019. I got 70.22%.
              </p>
              <p className='fs-4 w-100 ps-5'>
                In This Project, Details of my education, experiences, and create a project details. All GitHub link and website link is pasted here
              </p>
              <p className='fs-4 w-100 ps-5'>
                In This Application developed using React, Bootstrap, Movie Redux and EmailJs. In this app Show all latest Details. In This website, direct to email to me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
