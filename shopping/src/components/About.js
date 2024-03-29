import React from 'react'

function About() {
  return (
    <div className="container">
      <h1 className='text-center'> Project Details</h1>
      <img className="mb-2" width="60px" alt="api" />
      <p>This project developed using <a href="https://www.themoviedb.org/" target="_blank">ShopPerZ</a></p>

      <h4>Used Technologies</h4>
      <ul>
        <li>Html</li>
        <li>Css</li>
        <li>Bootstrap</li>
        <li>React</li>
        <li>React Router Dom</li>
      </ul>

      <h4>Install - Run</h4>
      <div class="card">
        <div class="card-body fw-bold text-dark">
          git clone https://github.com/nejlasahin/movie-app-with-react.git <br />
          <br />
          $ cd  movie-app-with-react<br />
          <br />
          $ npm install <br />
          $ npm start <br />

        </div>
      </div>
    </div>
  )
}

export default About