import React from 'react'
import './eduction.css';

function education() {
  return (
    <div class="resume">
      <section class="section-1">
        <div class="resume-section">
            <h2><strong>Resume</strong></h2>
            <hr style={{width:"50%",padding:"0 50%",alignItems:"center", display:"flex",justifyContent:"center"}}/>
        </div>
        <div class="resume-section-1">
          <div class="eduction-section">
            <h2><strong>Eduction</strong></h2>
            <div class="edu-detailes">
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
          <div class="experience-section">
            <h2><strong>Experience</strong></h2>
            <div class="exp-detailes">
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
      <section class="section-2">
        <div class="skill-section">
          <h2>My<strong> Skills</strong></h2>
          <hr/>
        </div>
            <div class="skill-detailes">
              <div class="container-1">
                <p>HTML</p>
                <div class="container">
                    <div class="skill percentage html">90%</div>
                </div>
              </div>
              <div class="container-1">
                <p>CSS</p>
                <div class="container">
                    <div class="skill percentage css">80%</div>
                </div>
              </div>
              <div class="container-1">
                <p>Node JS</p>
                <div class="container">
                    <div class="skill percentage node">70%</div>
                </div>
              </div>
              <div class="container-1">
                <p>React</p>
                <div class="container">
                    <div class="skill percentage react">70%</div>
                </div>
              </div>
              <div class="container-1">
                <p>BootStrap</p>
                <div class="container">
                    <div class="skill percentage bs">70%</div>
                </div>
              </div>
            </div>
      </section>
    </div>
  )
}

export default education