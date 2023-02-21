import React from 'react'
import Name  from "../assets/images/logo.png";

const Home = () => {
    return ( 
        <>
            <div className='home-wrapper'>
                <div className='container-xxl pt-5'>
                    <div className='row'>
                        <div className='col-6'>
                            <div>
                                <div className='d-flex align-items-center container-xxl justify-content-center text-white'>
                                    <h1 className='ps-4 fs-1'>Hello ✋ I'm,<br/> <strong>Vivek Kumar Patel</strong>.</h1>
                                </div>
                                <hr/>
                                <p className='fs-3 w-100 ps-4 fst-italic pt-4 text-dark border-3'>
                                    "A Web Developer activelly looking for a new possition. I love to explore
                                    new technologies and always try to enhance my skills through develop
                                    some projects.I am a passionate Full Stake Software developer and
                                    I interested to study updated technologies and tackle complex problems."
                                </p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='py-2 text-end'>
                                <img 
                                    src={Name} 
                                    alt='nameImage' 
                                    style={{borderRadius:"5%", width:"25rem",height:"25rem"}}
                                    className="float-end text-end float-lg-end"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='home-wrapper pt-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-4'>
                            <div>
                                <strong className='fs-1 text-white'>VIVEK</strong>
                            </div>
                            <div className='text-scondary fs-1'>
                                <strong className='fs-1' style={{color:"red"}}>PATEL</strong>
                            </div>
                        </div>

                        <div className='col-8'>
                            <div className='container-xxl d-flex-row justify-content-center align-items-center'>
                                <div className='d-flex justify-content-center align-items-center text-white'>
                                    <h1>About Me</h1>
                                </div>
                                <hr/>
                                <div>
                                    <p className='w-100 fs-4 fst-italic p-4 text-white'>
                                        I am a passionate Full Stake Software developer and I interested to study updated technologies and tackle complex problems. I completed my Bachelors in Electronics and Communication Engineering. My technical and management skills which will use to support the growth of the organization as well as myself.
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
        </>
    )
}

export default Home
