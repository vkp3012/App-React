import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
const Education = () => {
  return (
    <>
      <Meta title={"Eduction"} />
      <BreadCrumb title="Eduction" />

      <div className='edu-wrapper home-wrapper mb-0'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='text-center mb-0'>
                <p className='fs-1'><strong>Resume</strong></p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='edu-wrapper home-wrapper'>
        <div className='container-xxl'>
          <div className='row edu-detailes-1'>
            <div className='col-6 detailes'>
              <div className='text-center mb-0'>
                <p className='fs-1'><strong>Eduction</strong></p>
                <hr />
              </div>

              <div className=' text-center bg-body-tertiary'>
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
            <div className='col-6 detailes'>
              <div className='text-center mb-0'>
                <p className='fs-1 '><strong>Experience</strong></p>
                <hr />
              </div>
              <div className=' text-center bg-body-tertiary'>
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

      <div className='edu-wrapper home-wrapper '>
        <div className='container-xxl pt-3 '>
          <div className='row detailes mt-3'>
            <div className='col-4'>
              <div className='d-flex justify-content-center align-items-center'>
                <p className='fs-1 '><strong>My Skill</strong></p><hr />
                <hr />
              </div>
            </div>

            <div className='col-8 bg-body-tertiary'>
              <div className='d-flex-row justify-content-center align-items-center gap-30 pt-5 border-danger'>
                  <strong>HTML</strong>
                  <div className="progress gap-30 m-2 border-danger" >
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated text-center"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      90%
                    </div> 
                  </div>

                  <strong>CSS</strong>
                  <div className="progress gap-30 m-2 border-2" >
                    <div className="progress-bar progress-bar-striped progress-bar-animated border-success" role="progressbar" style={{ width: "85%" }} aria-valuenow="10" aria-valuemin="10" aria-valuemax="100">85%</div>                   
                  </div>

                  <strong>REACT</strong>
                  <div className="progress gap-30 m-2">
                    <div className="progress-bar progress-bar-striped progress-bar-animated text-center" role="progressbar" style={{ width: "75%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">75%</div>
                  </div>

                  <strong>BOOTSTRAP</strong>
                  <div className="progress gap-30 m-2" >
                    <div className="progress-bar progress-bar-striped progress-bar-animated text-center" role="progressbar" style={{ width: "70%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">70%</div>
                  </div>

                  <strong>NODE JS</strong>
                  <div className="progress gap-30 m-2 border-danger">
                    <div className="progress-bar progress-bar-striped progress-bar-animated text-center " role="progressbar" style={{ width: "70%" ,border:"1px solid black"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">70%</div>
                  </div>
                
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Education
