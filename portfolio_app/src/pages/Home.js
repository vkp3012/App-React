/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react'
import Meta from '../components/Meta';

import { Link } from "react-router-dom"
const Home = () => {
    return ( 
        <>
            <Meta title={"Vivek Patel"} />
            <div className='home-wrapper background'>
                <div className='container'>
                    <div className='row justify-content-end pt-5'>
                        <div className='col-6 header_style'>
                            <h1 className='ps-4 text-white pt-5' >Hello ✋ I'm,<strong>Vivek Kumar Patel</strong>.</h1>
                            <hr className='text-white border-5'/>
                            <p className='color text-end'>
                                "A Web Developer activelly looking for a new possition. I love to explore
                                new technologies and always try to enhance my skills through develop
                                some projects.I am a passionate Full Stake Software developer and
                                I interested to study updated technologies and tackle complex problems."
                            </p>
                            <a href='#more' className='text-center bg-body-secondary text-dark button justify-content-end font-monospace'> More Detailes</a>      
                        </div>
                    </div>
                </div>
            </div>

            <div className='home-wrapper pt-4'>
                <div className='container-xxl' id='more'>
                    <div className='row'>
                        <div className='col-4 mt-5 name_logo'> 
                            <strong className='mb-0 logo'>VIVEK</strong> 
                            <strong className='text-scondary mb-0 logo' style={{color:"red"}}>PATEL</strong>    
                        </div>

                        <div className='col-8 detailes'>
                            <div className='d-flex-row justify-content-center align-items-center'>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <h1>About Me</h1>
                                </div>
                                <hr/>
                                <div>
                                    <p className='w-100 fs-4 fst-italic p-4'>
                                        I am a passionate Full Stake Software developer and I interested to study updated technologies and tackle complex problems. I completed my Bachelors in Electronics and Communication Engineering. My technical and management skills which will use to support the growth of the organization as well as myself.
                                    </p>
                                </div>

                                <div className='d-flex justify-content-center align-items-center gap-30 py-3'>
                                    <button className='button gap-30'>
                                        <a href='https://drive.google.com/file/d/1DWEG4xb_DakS6EXtLTZVN86jylctulBR/view' >
                                            DOWNLOAD CV                                          
                                        </a> 
                                    </button>
                                    <button className='button gap-30'>
                                        <Link to="/contact">HIRE ME </Link> 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
