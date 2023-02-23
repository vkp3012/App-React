/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react'
// import Name  from "../assets/images/IMG_20211118_062452_597.jpg";
import Meta from '../components/Meta';
import { Link } from "react-router-dom"
const Home = () => {
    return ( 
        <>
            <Meta title={"Vivek Patel"} />
            <div className='home-wrapper background'>
                <div className='container'>
                    <div className='row header-detailes justify-content-end'>
                        <div className='col-6 detailes '>
                            <div>
                                <div className='d-flex align-items-center container-xxl justify-content-end fst-italic ps-4'>
                                    <h1 className='ps-4 text-white pt-5 header_style' >Hello ✋ I'm,<strong>Vivek Kumar Patel</strong>.</h1>
                                </div>
                                <hr className='text-white border-5'/>
                                <div className='d-flex container-xxl justify-content-end fst-italic ps-4'>
                                    <p className='fs-1 p-lg-5 w-100 fst-italic pt-4 text-dark text-white header_style text-end'>
                                        "A Web Developer activelly looking for a new possition. I love to explore
                                        new technologies and always try to enhance my skills through develop
                                        some projects.I am a passionate Full Stake Software developer and
                                        I interested to study updated technologies and tackle complex problems."
                                    </p>
                                </div>
                            </div>
                            <div className='button1 text-center bg-body-secondary text-dark fs-6'>
                                <a href='#more' className='text-center bg-body-secondary text-dark'> More Detailes</a>      
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='home-wrapper pt-4'>
                <div className='container-xxl' id='more'>
                    <div className='row'>
                        <div className='col-4 mt-5 name_logo header_style'>
                            <div className='logo'>
                                <strong className='mb-0'>VIVEK</strong> 
                            </div>
                            <div className='text-scondary mb-0 logo'>
                                <strong className='' style={{color:"red"}}>PATEL</strong>
                            </div>
                        </div>

                        <div className='col-8 detailes'>
                            <div className='container-xxl d-flex-row justify-content-center align-items-center'>
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
