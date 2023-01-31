import React from 'react'
import food from '../images/food.png'
import movie from "../images/movie.png"
import camera from "../images/camera.png"
import './project.css';

function project() {
  return (
    <div class="project-section d-flex-column col-12 mt-5 p-3 justify-content-center align-content-center">
      <div class="project d-flex mt-4 justify-content-center align-content-center">
          <img src={food} alt="placeholder" class="img-fluid" style={{width:"400px",height:"300px"}}/>
            <div className='d-flex-col p-3 col-6'>
              <h2 class="d-flex-col" style={{textDocartion:"underline"}}>
                  Food App Project <strong>Detailes</strong>
              </h2>
              <p class="p-2">
                  Food Application developed using React and MongoDB as Backend for 
                  local Restaurants which are not able to provide home delivery but 
                  want to increase customer experience by going Digital era. 
                  Instead of waiting in Queue By this application customers make orders by own in a restaurant with this app.
              </p>
              <button class="btn btn-primary m-1">
                  <a
                      href="https://ajayfood.onrender.com//"
                      class="btn-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{color:"white",textDecoration: "none"}}
                  >
                      Website
                  </a>
              </button>
              <button class="btn btn-primary">
                  <a
                      href="https://github.com/vkp3012/backend"
                      class="btn-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{color:"white",textDecoration: "none"}}
                  >
                      Git Link
                  </a>
              </button>
            </div>
        </div>
      <div class="project-2 d-flex mt-4 justify-content-center align-content-center">
        <div class="project-det d-flex-col p-3 col-6">
            <h2>
              Movie Project <strong>Detailes</strong>
            </h2>
            <p class="p-2">
              Movie Application developed using React,BootStrap and Movie API.
              In this app Show all leatest movies and save the favourites move in favourites 
              section. The favourites section delete the favourite movie and fiter the move Rating 
              and Popularity.
            </p>
            <button class="btn btn-primary m-1">
                <a
                    href="https://moviedetailes.netlify.app/"
                    style={{color:"white",textDecoration: "none",display:"inline"}}
                >
                    Website
                </a>
            </button>
            <button class="btn btn-primary">
                <a
                    href="https://github.com/vkp3012/App-React/tree/main/movie"
                    style={{color:"white",textDecoration: "none",display:"inline"}}
                >
                    Git Link
                </a>
            </button>
          </div>
          <img src={movie} alt="placeholder" class="img-fluid" style={{width:"400px",height:"300px"}}/>
      </div>
      <div class="project d-flex mt-4 justify-content-center align-content-center">
          <img src={camera} alt="placeholder" class="img-fluid" style={{width:"400px",height:"300px"}}/>
        <div class="d-flex-col p-3 col-6">
          <h2>
            Camera Project <strong>Detailes</strong>
          </h2>
                  <p class="p-2">
                    Camera Application developed using html, css and JavaScripts.
                    The Application use to capture a images and video recording
                    and save all images and video in gallery. The Application captuer 
                    image using fiter.
                  </p>
                    <button class="btn btn-primary m-1">
                        <a
                            href="https://camerashot.netlify.app/index.html"
                            class="btn-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{color:"white",textDecoration: "none"}}
                        >
                            Website
                        </a>
                    </button>
                    <button class="btn btn-primary">
                        <a
                            href="https://github.com/vkp3012/camera"
                            class="btn-2"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{color:"white",textDecoration: "none"}}
                        >
                            Git Link
                        </a>
                    </button>
            </div>
      </div>
    </div>
  )
}

export default project