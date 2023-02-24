import React from 'react'
import Meta from '../components/Meta'
import BreadCrummb from "../components/BreadCrumb"
import Movie from "../assets/images/movie1.png"
import Food from "../assets/images/food.png"
import Ecommerce from "../assets/images/ecommerce.png"

const Project = () => {
  return (
    <div>
      <Meta title={'Project'} />
      <BreadCrummb title="Project" />
      <div className='project-wrapper home-wrapper'>
        <div className='container-xxl pt-4 py-4'>
          <div className='row footer-detailes'>
            <div className='col-3 detailes'>
              <img src={Movie} alt='movie' style={{maxWidth:"100%",height:"100%"}}/>
            </div>
            <div className='col-9 detailes'>
              <div class="card text-white bg-dark mb-3" style={{maxWidth:"100%"}}>
                <div class="card-header">MovieFlex</div>
                <div class="card-body">
                  <h5 class="card-title fs-2">Movie App Details</h5>
                  <p class="card-text fs-4 ps-4">
                    Movie web Application developed using React, Bootstrap, Movie API, Hook, Redux and Mango DB. 
                    In this app Show all latest movies and web series. In This app are logging then save the favorites 
                    move in favorites section and add own review in favorite movie and web series. The favorites section 
                    deletes the favorite movie and filter the move Rating and Popularity.
                  </p>
                </div>
                <div className='d-flex justify-content-center align-items-center gap-30 py-3'>
                  <button className='button gap-30'>
                    <a href="https://movieapp-2023.vercel.app/">
                      WebSite Link
                    </a>
                  </button>
                  <button className='button gap-30'>
                  <a href="https://github.com/vkp3012/movieapp-2023">
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
          <div className='row footer-detailes'>
            <div className='col-3 detailes'>
              <img src={Food} alt='movie' style={{maxWidth:"100%" ,height:"100%"}}/>
            </div>
            <div className='col-9 detailes'>
              <div class="card text-white bg-dark mb-3" style={{maxWidth:"100%"}}>
                <div class="card-header">Food</div>
                <div class="card-body">
                  <h5 class="card-title fs-2">Food App Details</h5>
                  <p class="card-text fs-4 ps-4">
                    Food web Application developed using React and MongoDB as Backend for local Restaurants which are not able 
                    to provide home delivery but want to increase customer experience by going Digital era. Instead of waiting in 
                    Queue By this application customers make orders by own in a restaurant with this app.
                  </p>
                </div>
                <div className='d-flex justify-content-center align-items-center gap-30 py-3'>
                  <button className='button gap-30'>
                    <a href="https://ajayfood.onrender.com//">
                      WebSite Link
                    </a>
                  </button>
                  <button className='button gap-30'>
                  <a href="https://github.com/vkp3012/backend">
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
          <div className='row footer-detailes'>
            <div className='col-3 detailes'>
              <img src={Ecommerce} alt='movie' style={{maxWidth:"100%" ,height:"100%"}}/>
            </div>
            <div className='col-9 detailes'>
              <div class="card text-white bg-dark mb-3" style={{maxWidth:"100%"}}>
                <div class="card-header">Ecommerce</div>
                <div class="card-body">
                  <h5 class="card-title fs-2">Ecommerce App Details</h5>
                  <p class="card-text fs-4 ps-4">
                    Ecommerce Web Application developed using React, Bootstrap and redux. 
                    In this app Show all latest product, add product, checkout the product,
                    and buy the product. In this app show all product details.
                  </p>
                </div>
                <div className='d-flex justify-content-center align-items-center gap-30 py-3'>
                  <button className='button gap-30'>
                    <a href="https://ecommerce-app-lac.vercel.app/contact">
                      WebSite Link
                    </a>
                  </button>
                  <button className='button gap-30'>
                  <a href="https://github.com/vkp3012/Ecommerce-App">
                      GitHub Link
                    </a>
                  </button>
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
