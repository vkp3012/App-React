import React, { Component } from 'react'
import Favourites from './Favourites'

export default class Profile extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-sm-2'>
                <h1>Profile page</h1>
            {/* <img src={user.avatarUrl} alt={user.username} width="124" height="124" className="d-inline-block align-text-top me-2 rounded-circle" /> */}
            </div>
        </div>
      </div>
    )
  }
}
