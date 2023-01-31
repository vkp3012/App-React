import React from 'react'
import './eduction.css';

function education() {
  return (
    <div class="resume">
      <section class="section-1">
        <div class="mt-5">
            <h2 class="p-1"><strong>Resume</strong></h2>
            <hr style={{width:"50%",padding:"0 50%",alignItems:"center", display:"flex",justifyContent:"center"}}/>
        </div>
        <div class="resume-0 d-flex flex-row col-12 p-2">
          <div class="resume-1 col-6">
            <h2><strong>Eduction</strong></h2>
            <div class="p-3 bg-secondary">
              <span>
                <i class="fa fa-calendar" aria-hidden="true"></i> August 2015 - 2019 May
              </span>
              <h3>Bachelor of Electronics and Communication Engineering</h3>
              <p> 
                I completed studies in Electronics and Communication
                Engineering. I did One course work as part of this program                                 that was helping to develop my technical problem solving and
                development of software and testing skills.
              </p>
              <h3 class="school">
                United College of Engineering and Research Allahabad
              </h3>
            </div>
          </div>
          <div class=" resume-1 col-6 mx-1">
            <h2><strong>Experience</strong></h2>
            <div class="p-3 bg-secondary">
              <span>
                <i class="fa fa-calendar" aria-hidden="true"></i> January 2022 - July 2022
              </span>
              <h3>Web Development Training</h3>
              <p> 
                I completed the intern training program successfully. This
                course work was helped to develop my technical problem solving
                and software development and testing skills.
              </p>
              <h3 class="school">
                Pepecoding Education (OPC) Private Ltd.
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section class="section-2 row m-2">
        <div class="skill-section col-2">
          <h2>My<strong> Skills</strong></h2>
          <hr/>
        </div>
            <div class="col-10 p-4">
              <div class="d-flex col-10">
                <h5 >HTML</h5>
                <div class="progress m-1 col-12" role="progressbar" aria-label="Basic example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">  
                  <div class="progress-bar" style={{width: "95%"}}>Html</div>
                </div>
              </div>
              <div class="d-flex col-12">
                <h5 >CSS</h5>
                <div class="progress m-1 col-10" role="progressbar" aria-label="Basic example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">  
                  <div class="progress-bar" style={{width: "90%"}}>CSS</div>
                </div>
              </div>
              <div class="d-flex col-12">
                <h5 >Node JS</h5>
                <div class="progress m-1 col-10" role="progressbar" aria-label="Basic example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">  
                  <div class="progress-bar" style={{width: "70%"}}>Node JS</div>
                </div>
              </div>
              <div class="d-flex col-12">
                <h5 >React</h5>
                <div class="progress m-1 col-10" role="progressbar" aria-label="Basic example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">  
                  <div class="progress-bar" style={{width: "70%"}}>React</div>
                </div>
              </div>
              <div class="d-flex col-12">
                <h5 >BootStrap</h5>
                <div class="progress m-1 col-10" role="progressbar" aria-label="Basic example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">  
                  <div class="progress-bar" style={{width: "75%"}}>BootStrap</div>
                </div>
              </div>
              
            </div>
      </section>
    </div>
  )
}

export default education