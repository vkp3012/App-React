import React from 'react'
import '../styles/home.css';
import Search  from './search';
import Booklist from '../book/booklist';
import Footer from './footer';
function home() {
  return (
    <div className='holder'>
        <header className='header'>
            <div className='header-content flex flex-c text-center text-white'>
                <h1 className='header-title text-capitalize'>Welcome to my book shop</h1><br />
                <h4 className='header-text text-capitalize'>find your book of choice.</h4><br />
                <p className='header-text fs-18 fw-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt at id repudiandae, modi iste? Eligendi, rerum!</p>
                <Search />
            </div>
        </header>
        <Booklist/>
        <Footer/>
    </div>
  )
}

export default home