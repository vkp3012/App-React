import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {  
    return (
        <>
            <nav className='navbar navbar-expand-lg  nav-justified'>
                <div className='row container-xxl detailes-1'>
                    <div className='col-4'>
                        <div className='pt-2 ps-2 nav-1' >
                            <Link
                                to ="/"
                                className='text-white d-flex'
                            >
                                <h4 style={{color:"white",paddingTop:"10px"}} className="fs-2">Vivek</h4><h4 style={{color:"red",paddingTop:"10px"}} className="fs-2">Patel</h4>
                            </Link>
                        </div>
                    </div>
                    <div className='col-1'>
                        <button 
                            class="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className='container-xxl col-7 collapse navbar-collapse' id="navbarSupportedContent">
                        <div>
                            <ul className='navbar-nav me-auto mt-2 fs-4 text-uppercase me-auto'>
                                <li className='nav-item'>
                                    <Link
                                        to ="/"
                                        className='text-white nav-item' 
                                    >
                                        <p className='mb-0'  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Home</p>
                                    </Link>
                                
                                </li>
                                <li className='nav-item'>
                                    <Link
                                        to ="/education"
                                        className='text-white nav-item gap-30'
                                    >
                                        <p className='mb-0 gap-30'  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Education</p>
                                    </Link>
                                </li>
                                <li className='nav-item'>  
                                    <Link
                                        to ="/project"
                                        className='text-white nav-item'
                                    >
                                        <p className='mb-0' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Project</p>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                        <Link
                                            to ="/contact"
                                            className='text-white nav-item'
                                        >
                                            <p className='mb-0' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contact</p>
                                        </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link
                                        to ="/about"
                                        className='text-white'
                                    >
                                        <p className='mb-0' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">About</p>
                                    </Link>
                                </li>
                            </ul>    
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
