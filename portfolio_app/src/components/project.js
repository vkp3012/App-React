import React from "react";
import './styles/project.css'
import name from './images/food.png'
import name1 from './images/movie.png'
import name2 from './images/camera.png'
import name3 from './images/p4.jpg'

function project() {
    return (
        <div class="project-section">
            <div class="container">
            <div class="row mb-5 align-items-center">
            <div class="col-lg-7 pr-lg-5 mb-2 mb-lg-0">
                <img src={name} alt="placeholder" class="img-fluid" />
            </div>
            <div class="col-lg-5 pl-lg-5">
                <div class="section-heading" style={{textDecoration: "underline"}}>
                <h2>
                    Food App Project <strong>Detailes</strong>
                </h2>
                </div>
                <p class="mb-5 InteractiveSection__Block-sc-9117tt-6 iGUPuv">
                    Food Application developed using React and MongoDB as Backend for 
                    local Restaurants which are not able to provide home delivery but 
                    want to increase customer experience by going Digital era. 
                    Instead of waiting in Queue By this application customers make orders by own in a restaurant with this app.
                </p>
                <p>
                    <a
                        href="https://ajayfood.onrender.com/"
                        class="btn btn-secondary px-4 py-2 btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Website
                    </a>
                </p>
                <p>
                    <a
                        href="https://github.com/vkp3012/backend"
                        class="btn btn-secondary px-4 py-2 btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Git Link
                    </a>
                </p>
            </div>
        </div>
            </div>
            <div class="container">
                <div class="row mb-2 align-items-center">
                    <div class="col-lg-5 pl-lg-5">
                        <div class="section-heading " style={{textDecoration: "underline"}}>
                            <h2>
                                Movie Project <strong>Detailes</strong>
                            </h2>
                        </div>
                        <p class="mb-5 InteractiveSection__Block-sc-9117tt-6 iGUPuv">
                            Movie Application developed using React,BootStrap and Movie API.
                            In this app Show all leatest movies and save the favourites move in favourites 
                            section. The favourites section delete the favourite movie and fiter the move Rating 
                            and Popularity.
                        </p>
                        <p>
                            <a
                                href="https://moviedetailes.netlify.app/"
                                class="btn btn-secondary px-4 py-2 btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Website
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://github.com/vkp3012/App-React/tree/main/movie"
                                class="btn btn-secondary px-4 py-2 btn-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Git Link
                            </a>
                        </p>
                    </div>
                        <div class="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
                            <img src={name1} alt="placeholder" class="img-fluid" />
                        </div>
                </div>
            </div>
            <div class="container">
            <div class="row mb-5 align-items-center">
            <div class="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
                <img src={name2} alt="placeholder" class="img-fluid" />
            </div>
            <div class="col-lg-5 pl-lg-5">
                <div class="section-heading" style={{textDecoration: "underline"}}>
                <h2>
                    Camera Project <strong>Detailes</strong>
                </h2>
                </div>
                <p class="InteractiveSection__Block-sc-9117tt-6 iGUPuv">
                    Camera Application developed using html, css and JavaScripts.
                    The Application use to capture a images and video recording
                    and save all images and video in gallery. The Application captuer 
                    image using fiter.
                </p>
                <p>
                    <a
                        href="https://camerashot.netlify.app/index.html"
                        class="btn btn-secondary px-4 py-2 btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Website
                    </a>
                </p>
                <p>
                <a
                    href="https://github.com/vkp3012/camera"
                    class="btn btn-secondary px-4 py-2 btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Git Link
                </a>
                </p>
            </div>
        </div>
            </div>
            <div class="container">
                <div class="row mb-5 align-items-center">
                    <div class="col-lg-5 pl-lg-5 ">
                        <div class="section-heading" style={{textDecoration: "underline"}}>
                            <h2>
                                Project <strong>Detailes</strong>
                            </h2>
                        </div>
                        <p class="mb-5 InteractiveSection__Block-sc-9117tt-6 iGUPuv">
                        I am a passionate Full Stake Software developer and I interested
                        to study updated technologies and tackle complex problems. I
                        completed my Bachelors in Electronics and Communication Engineering. My
                        technical and management skills which will use to support the
                        growth of the organization as well as myself.
                        </p>
                        <p>
                            <a
                                href="#s"
                                class="btn btn-secondary px-4 py-2 btn-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Git Link
                            </a>
                        </p>
                    </div>
                        <div class="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
                            <img src={name3} alt="placeholder" class="img-fluid" />
                        </div>
                </div>
            </div>
        </div>
    );
}

export default project;
