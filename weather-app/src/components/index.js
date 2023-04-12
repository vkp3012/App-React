import React from 'react'
import Weather from '../weather/weather';
import Todo from '../todo/todo';
import Quote from '../quotes/quote';
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButton from '../weather/topButton';
import Input from "../weather/input.jsx"
import TimeAndLocation from "../weather/TimeAndLocation.jsx"
import TemperatureAndDetails from "../weather/TemperatureAndDetails.jsx"
import Forecast from "../weather/Forecast.jsx"
import { Link } from "react-router-dom"
import getWeatherData from '../services/servics';

const Index = () => {

    const fetchWeather = async() => {
        const data = await getWeatherData("weather" ,{q:"varanasi"})
        console.log(data);
    }

    fetchWeather();

    return (
        <div className='container h-100'>
            <div className='row'>
                <Quote/>
                <div className='col-4 p-3'>
                    <Weather/>
                    <TimeAndLocation/>
                    <TemperatureAndDetails/>
                </div>
                <div className='col-7 h-90'>
                    {/* <UilReact size={50} /> */}
                    <TopButton/>
                    <Input/>
                    <TimeAndLocation/>
                    <Forecast title="Hourly Forecast"/>
                    <Forecast title="Daily Forecast"/>
                </div>
                <div className='col-1'>
                    <Link to="/todo">
                        <button
                            style={{
                                borderRadius:"55%",
                                padding:"10px",
                                fontSize:"10px",
                                background:"rgb(31, 81, 98)",
                                marginRight:"20px"
                            }}
                            alt="todo"
                        >
                            📝
                        </button>
                        <span>{Todo}</span>
                    </Link>
                    <Link to="/todo">
                        <button
                            style={{
                                borderRadius:"55%",
                                padding:"10px",
                                fontSize:"10px",
                                background:"rgb(31, 81, 98)",
                                marginRight:"20px"
                            }}
                            alt="todo"
                        >
                            🎮
                        </button>
                        <span>{Todo}</span>
                    </Link>
                    <Link to="/todo">
                        <button
                            style={{
                                borderRadius:"55%",
                                padding:"10px",
                                fontSize:"10px",
                                background:"rgb(31, 81, 98)",
                                marginRight:"20px"
                            }}
                            alt="todo"
                        >
                            🎵
                        </button>
                        <span>{Todo}</span>
                    </Link>
                    <Link to="/todo">
                        <button
                            style={{
                                borderRadius:"55%",
                                padding:"10px",
                                fontSize:"10px",
                                background:"rgb(31, 81, 98)",
                                marginRight:"20px"
                            }}
                            alt="todo"
                        >
                            📰
                        </button>
                        <span>{Todo}</span>
                    </Link>
                    <Link to="/todo">
                        <button
                            style={{
                                borderRadius:"55%",
                                padding:"10px",
                                fontSize:"10px",
                                background:"rgb(31, 81, 98)",
                                marginRight:"20px"
                            }}
                            alt="todo"
                        >
                            🎞️
                        </button>
                        <span>{Todo}</span>
                    </Link>
                    <Link to="/todo">
                        <button
                            style={{
                                borderRadius:"55%",
                                padding:"10px",
                                fontSize:"10px",
                                background:"rgb(31, 81, 98)",
                                marginRight:"20px"
                            }}
                            alt="todo"
                        >
                            📆
                        </button>
                        <span>{Todo}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Index
