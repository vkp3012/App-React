import React from 'react'
import '../styles/search.css'
import {FaSearch} from "react-icons/fa";

function search() {
  return (
    <div className='search-form '>
    <div className='container flex-c'>
      <div className='search-form-content flex-c'>
        <form className='search-form flex-c' >
          <div className='search-form-elem flex  flex-c'>
            <input type = "text" className='form-control flex-column' placeholder='The Lost World ...'  />
            <button type = "submit" className='flex flex-c' >
              <FaSearch size = {42} borderRadius= {50} />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default search