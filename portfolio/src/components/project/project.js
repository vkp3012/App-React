import React from 'react'
import food from '../images/food.png'
import movie from "../images/movie.png"
import camera from "../images/camera.png"
import './project.css';

function project() {
  return (
    <div class="project-section">
      <div class="project-detailes">
        <div class="project-img">
          <img src={food} alt="placeholder" class="img-fluid" style={{width:"400px",height:"300px"}}/>
        </div>
        <div class="project-detalie">
                <div class="section-heading" style={{textDecoration: "underline"}}>
                    <h2>
                        Food App Project <strong>Detailes</strong>
                    </h2>
                </div>
                <div class="section-heading">
                  <p class="project-decrption">
                      Food Application developed using React and MongoDB as Backend for 
                      local Restaurants which are not able to provide home delivery but 
                      want to increase customer experience by going Digital era. 
                      Instead of waiting in Queue By this application customers make orders by own in a restaurant with this app.
                  </p>
                  <div class="project-btn">
                    <p class="btn">
                        <a
                            href="https://ajayfood.onrender.com/"
                            class="btn-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{color:"white",textDecoration: "none"}}
                        >
                            Website
                        </a>
                    </p>
                    <p class="btn">
                        <a
                            href="https://github.com/vkp3012/backend"
                            class="btn-2"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{color:"white",textDecoration: "none"}}
                        >
                            Git Link
                        </a>
                    </p>
                  </div>
                </div>
            </div>
      </div>
      <div class="project-detailes">
        <div class="project-detalie">
                <div class="section-heading" style={{textDecoration: "underline"}}>
                    <h2>
                      Movie Project <strong>Detailes</strong>
                    </h2>
                </div>
                <div class="section-heading">
                  <p class="project-decrption">
                    Movie Application developed using React,BootStrap and Movie API.
                    In this app Show all leatest movies and save the favourites move in favourites 
                    section. The favourites section delete the favourite movie and fiter the move Rating 
                    and Popularity.
                  </p>
                  <div class="project-btn">
                    <p class="btn">
                        <a
                            href="https://moviedetailes.netlify.app/"
                            class="btn-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{color:"white",textDecoration: "none"}}
                        >
                            Website
                        </a>
                    </p>
                    <p class="btn">
                        <a
                            href="https://github.com/vkp3012/App-React/tree/main/movie"
                            class="btn-2"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{color:"white",textDecoration: "none"}}
                        >
                            Git Link
                        </a>
                    </p>
                  </div>
                </div>
            </div>
            <div class="project-img">
              <img src={movie} alt="placeholder" class="img-fluid" style={{width:"400px",height:"300px"}}/>
            </div>
      </div>
      <div class="project-detailes">
        <div class="project-img">
          <img src={camera} alt="placeholder" class="img-fluid" style={{width:"400px",height:"300px"}}/>
        </div>
        <div class="project-detalie">
                <div class="section-heading" style={{textDecoration: "underline"}}>
                    <h2>
                      Camera Project <strong>Detailes</strong>
                    </h2>
                </div>
                <div class="section-heading">
                  <p class="project-decrption">
                    Camera Application developed using html, css and JavaScripts.
                    The Application use to capture a images and video recording
                    and save all images and video in gallery. The Application captuer 
                    image using fiter.
                  </p>
                  <div class="project-btn">
                    <p class="btn">
                        <a
                            href="https://camerashot.netlify.app/index.html"
                            class="btn-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{color:"white",textDecoration: "none"}}
                        >
                            Website
                        </a>
                    </p>
                    <p class="btn">
                        <a
                            href="https://github.com/vkp3012/camera"
                            class="btn-2"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{color:"white",textDecoration: "none"}}
                        >
                            Git Link
                        </a>
                    </p>
                  </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default project