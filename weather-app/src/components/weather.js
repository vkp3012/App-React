import React from 'react'
import Clock from "react-live-clock";
import moment from 'moment';
import Todo from './todo';
const Weather = () => {

    return (
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-3 p-3'>
                    <div className='dateTime'>
                        <div className='current-time'>
                            <Clock format='HH:mm:ss' interval={1000} ticking={true} />
                        </div>
                        <div className='currentDate'>
                            {moment().format('MMMM Do YYYY')}
                        </div>
                        <div className='temp'>
                            <p>
                                32°<span>C</span>
                            </p>
                            <span className='slash'>/</span>
                            64 &deg;F
                        </div>
                    </div>
                </div>
                <div className='col-5'>
                    Hello
                </div>
                <div className='col-4'>
                    <Todo/>
                </div>
            </div>
        </div>
    )
}

export default Weather
