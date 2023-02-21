import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
const Education = () => {
  return (
    <>
      <Meta title={"Eduction"}/>
      <BreadCrumb title= "Eduction"/>

      <div className='edu-wrapper home-wrapper mb-0'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='text-center mb-0'>
                  <p className='fs-1'><strong>Resume</strong></p>
                <hr/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='edu-wrapper home-wrapper'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='text-center mb-0'>
                <p className='fs-1 text-white'><strong>Eduction</strong></p>
                <hr/>
              </div>

              <div className='text-white text-center'>
                <p>August 2015 - 2019 May</p>
                <h4>Bachelor of Electronics and Communication Engineering</h4>
                <p className='w-60 fs-5 pt-4 fst-italic'>
                  I completed studies in Electronics and Communication Engineering. 
                  I did One course work as part of this program that was helping to develop my technical problem solving and development
                  of software and testing skills.
                </p>
                <h2>United College of Engineering and Research Allahabad</h2>
              </div>
            </div>
            <div className='col-6'>
              <div className='text-center mb-0'>
                <p className='fs-1 text-white'><strong>Experience</strong></p>
                <hr/>
              </div>
              <div className='text-white text-center'>
                <p> January 2022 - July 2022</p>
                <h4>Web Development Training</h4>
                <p className='w-60 fs-5 pt-4 fst-italic'>
                  I completed the intern training program successfully. 
                  This course work was helped to develop my technical problem solving and software development and testing skills
                </p>
                <h2>Pepecoding Education (OPC) Private Ltd.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='edu-wrapper home-wrapper'>
        <div className='container-xxl pt-3'>
          <div className='row'>
            <div className='col-4'>
              <div className='d-flex justify-content-center align-items-center'>
                <p className='fs-1 text-white'><strong>My Skill</strong></p><hr/>
                <hr/>
              </div>
            </div>

            <div className='col-8'>
              <div className='d-flex justify-content-center align-items-center gap-30'>
                <div className='gap-30 pt-5 '>
                  <div className="progress gap-30 m-2" style={{width: "1000px"}}>
                    <div 
                    className="progress-bar progress-bar-striped fs-1 progress-bar-animated" 
                    role="progressbar" 
                    style={{width: "90%"}} 
                    aria-valuenow="10" 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  >

                    </div>
                    <strong>Html</strong>
                  </div>
                  <div className="progress gap-30 m-2" style={{width: "1000px"}}>
                    <div className="progress-bar progress-bar-striped fs-1" role="progressbar" style={{width: "85%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    <strong>CSS</strong>
                  </div>
                  <div className="progress gap-30 m-2" style={{width: "1000px"}}>
                    <div className="progress-bar progress-bar-striped fs-1" role="progressbar" style={{width: "75%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    <strong>REACT</strong>
                  </div>
                  <div className="progress gap-30 m-2" style={{width: "1000px"}}>
                    <div className="progress-bar progress-bar-striped fs-1" role="progressbar" style={{width: "70%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    <strong>BOOTSTRAP</strong>
                  </div>
                  <div className="progress gap-30 m-2" style={{width: "1000px"}}>
                    <div className="progress-bar progress-bar-striped fs-1" role="progressbar" style={{width: "70%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    <strong>NODE JS</strong>
                  </div>
                </div>
                <hr/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Education
