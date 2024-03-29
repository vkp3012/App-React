import React from 'react'
import api from '../assets/api.svg'
function About() {
  return (
    <div className="container">
        <h1 className='text-center'> Project Details</h1>
        <img className="mb-2" src={api} width="60px" alt="api" />
        <p>This project developed using <a href="https://www.themoviedb.org/" target="_blank"> TheMovieDB</a></p>

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
                        git clone https://github.com/vkp3012/App-React/tree/main/movie <br />
                        <br />
                        $ cd  movie<br />
                        <br />
                        $ npm install <br />
                        $ npm start <br />

                    </div>
                </div>
    </div>
  )
}

export default About