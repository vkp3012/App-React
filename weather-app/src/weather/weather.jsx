import React from 'react'
import Clock from "react-live-clock";
import moment from 'moment';

const Weather = () => {
    return (
        <div>
            <div className='dateTime'>
                <div className='current-time'>
                    <Clock format='HH:mm:ss' interval={1000} ticking={true} />
                </div>
                <div className='currentDate'>
                    {moment().format('MMMM Do YYYY')}
                </div>
            </div>
        </div>
    )
}

export default Weather
