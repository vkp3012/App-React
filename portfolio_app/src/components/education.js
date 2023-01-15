import React from "react";
import "./styles/eduction.css";

function education() {
    return (
        <div class="eduction-section">
            <section class="site-section bg-light" id="section-resume">
                <div class="container">
                <div class="row">
                    <div class="col-md-12 mb-5">
                    <div class="section-heading text-center">
                        <h2>
                        My <strong>Resume</strong>
                        </h2>
                    </div>
                    </div>
                    <div class="col-md-6">
                    <h2 class="mb-5">Education</h2>
                    <div class="resume-item mb-2">
                        <span class="date">
                        <span class="icon-calendar"></span>
                        August 2015 - 2019 May
                        </span>
                        <h2>Bachelor of Electronics and Communication Engineering</h2>
                        <p>
                        I completed studies in Electronics and Communication
                        Engineering. I did One course work as part of this program
                        that was helping to develop my technical problem solving and
                        development of software and testing skills.
                        </p>
                        <span class="school">
                        United College of Engineering and Research Allahabad
                        </span>
                    </div>
                    </div>
                    <div class="col-md-6">
                    <h2 class="mb-5">Experience</h2>
                    <div class="resume-item mb-2">
                        <span class="date">
                        <span class="icon-calendar"></span> January 2022 - July 2022
                        </span>
                        <h3>Web Development Trainee</h3>
                        <p>
                        I completed the intern training program successfully. This
                        coursework was helped to develop my technical problem solving
                        and software development and testing skills.
                        </p>
                        <span class="school">
                        Pepecoding Education (OPC) Private Ltd.
                        </span>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <div class="container">
                <div class="row pt-5">
                <div class="col-md-3 mb-3">
                    <div class="section-heading">
                    <h2>
                        My <strong>Skills</strong>
                    </h2>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="skill">
                    <h3>HTML5</h3>
                    <div class="progress">
                        <div
                        class="progress-bar"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{width: "80%"}}
                        >
                        <span>90%</span>
                        </div>
                    </div>
                    </div>
                    <div class="skill">
                    <h3>CSS3</h3>
                    <div class="progress">
                        <div
                        class="progress-bar"
                        role="progressbar"
                        aria-valuenow="88"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{width: "80%"}}
                        >
                        <span>88%</span>
                        </div>
                    </div>
                    </div>
                    <div class="skill">
                    <h3>Bootstrap</h3>
                    <div class="progress">
                        <div
                        class="progress-bar"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{width: "80%"}}
                        >
                        <span>85%</span>
                        </div>
                    </div>
                    </div>
                    <div class="skill">
                    <h3>JavaScript</h3>
                    <div class="progress">
                        <div
                        class="progress-bar"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{width: "80%"}}
                        >
                        <span>85%</span>
                        </div>
                    </div>
                    </div>
                    <div class="skill">
                    <h3>React.js</h3>
                    <div class="progress">
                        <div
                        class="progress-bar"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{width: "80%"}}
                        >
                        <span>80%</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );    
}

export default education;
