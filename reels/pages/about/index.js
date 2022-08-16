import React from 'react'
import Navbar from '../../components/Navbar'

function index() {
  return (
    <div className="container">
      <Navbar />
      <h1 className='text-center'> Project Details</h1>
      {/* <img className="mb-2" src={api} width="60px" alt="api" /> */}
      {/* <p>This project developed using <a href="https://www.themoviedb.org/" target="_blank"> TheMovieDB</a></p> */}

      <h4>Used Technologies</h4>
      <ul>
        <li>Html</li>
        <li>Css</li>
        <li>Materical UI</li>
        <li>React - Next JS</li>
        <li>Firebase</li>
      </ul>

      <h4>Install - Run</h4>
      <div class="card">
        <div class="card-body fw-bold text-dark">
          git clone https://github.com/vkp3012/App-React/tree/main/reels <br />
          <br />
          $ cd  reels-app<br />
          <br />
          $ npm install <br />
          $ npm run dev <br />

        </div>
      </div>
    </div>
  )
}

export default index