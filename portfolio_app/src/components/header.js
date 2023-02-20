import React from 'react'
import { Link } from "react-router-dom"
const Header = () => {
    return (
        <>
            <nav className='navbar navbar-expand-lg'>
                <div className='row container-fluid'>
                    <div className='col-4 px-5 d-flex algin-items-center'>
                        <div className=' d-flex align-items-center p-md-3'>
                            <Link
                                to ="/"
                                className='text-white d-flex'
                            >
                                <h4 style={{color:"white"}}>Vivek</h4><h4 style={{color:"red"}}>Patel</h4>
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
                    <div className='col-7 collapse navbar-collapse' id="navbarSupportedContent">
                        <div>
                            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                                <li className='nav-item'>
                                    <Link
                                        to ="/"
                                        className='text-white nav-item' 
                                    >
                                        <p className='mb-0'>Home</p>
                                    </Link>
                                
                                </li>
                                <li className='nav-item'>
                                    <Link
                                        to ="/education"
                                        className='text-white nav-item gap-30'
                                    >
                                        <p className='mb-0 gap-30'>Eduction</p>
                                    </Link>
                                </li>
                                <li className='nav-item'>  
                                    <Link
                                        to ="/project"
                                        className='text-white nav-item'
                                    >
                                        <p className='mb-0'>Project</p>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                        <Link
                                            to ="/contact"
                                            className='text-white nav-item'
                                        >
                                            <p className='mb-0'>Contact</p>
                                        </Link>
                                </li>
                                <li className='nav-item'>
                                        <Link
                                            to ="/about"
                                            className='text-white'
                                        >
                                            <p className='mb-0'>About</p>
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
