import React from 'react'
import Meta from '../components/Meta'
import BreadCrummb from "../components/BreadCrumb"
import Movie from "../assets/images/movie.png"
import Food from "../assets/images/food.png"

const Project = () => {
  return (
    <div>
      <Meta title={'Project'} />
      <BreadCrummb title="Project" />
      <div className='project-wrapper home-wrapper'>
        <div className='container-xxl pt-4 py-4'>
          <div className='row'>
            <div className='col-3'>
              <img src={Movie} alt='movie' style={{maxWidth:"100%",height:"100%"}}/>
            </div>
            <div className='col-9'>
              <div class="card text-white bg-dark mb-3" style={{maxWidth:"100%"}}>
                <div class="card-header">MovieFlex</div>
                <div class="card-body">
                  <h5 class="card-title fs-2">Movie App Details</h5>
                  <p class="card-text fs-4 ps-4">
                    Movie Application developed using React,BootStrap,Movie API,Hook, Redux and MangoDB. 
                    In this app Show all leatest movies and webseries.In This app are logging then save the favourites move in favourites section and 
                    add own review in favourite movie and webseries.
                    The favourites section delete the favourite movie and fiter the move Rating and Popularity.
                  </p>
                </div>
                <div className='d-flex justify-content-center align-items-center gap-30 py-3'>
                  <button className='button gap-30'>
                    <a href="https://movieapp-2023.vercel.app/">
                      WebSite Link
                    </a>
                  </button>
                  <button className='button gap-30'>
                  <a href="https://movieapp-2023.vercel.app/">
                      GitHub Link
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='project-wrapper home-wrapper'>
        <div className='container-xxl pt-4 py-4'>
          <div className='row'>
            <div className='col-3'>
              <img src={Food} alt='movie' style={{maxWidth:"100%" ,height:"100%"}}/>
            </div>
            <div className='col-9'>
              <div class="card text-white bg-dark mb-3" style={{maxWidth:"100%"}}>
                <div class="card-header">Food</div>
                <div class="card-body">
                  <h5 class="card-title fs-2">Food App Detailes</h5>
                  <p class="card-text fs-4 ps-4">
                    Food Application developed using React and MongoDB as Backend for local Restaurants which are not able 
                    to provide home delivery but want to increase customer experience by going Digital era. Instead of waiting in 
                    Queue By this application customers make orders by own in a restaurant with this app.
                  </p>
                </div>
                <div className='d-flex justify-content-center align-items-center gap-30 py-3'>
                                    <button className='button gap-30'>HIRE ME</button>
                                    <button className='button gap-30'>DOWNLOAD CV</button>
                                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='project-wrapper home-wrapper'>
        <div className='container-xxl pt-4 py-4'>
          <div className='row'>
            <div className='col-3'>
              <img src={Movie} alt='movie' style={{maxWidth:"100%" ,height:"100%"}}/>
            </div>
            <div className='col-9'>
              <div class="card text-white bg-dark mb-3" style={{maxWidth:"100%"}}>
                <div class="card-header">Ecommerce</div>
                <div class="card-body">
                  <h5 class="card-title fs-2">Ecommerce App Details</h5>
                  <p class="card-text fs-4 ps-4">
                    Ecommerce Web Application developed using React,BootStrap and redux. 
                    In this app Show all leatest product, add product, checkout the product,
                    and buy the product. In this app show all product detailes.
                  </p>
                </div>
                <div className='d-flex justify-content-center align-items-center gap-30 py-3'>
                                    <button className='button gap-30'>HIRE ME</button>
                                    <button className='button gap-30'>DOWNLOAD CV</button>
                                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Project
