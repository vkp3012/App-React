import React, { useEffect, useState } from 'react'
import Weather from '../weather/weather';
import Todo from '../todo/todo';
import Quote from '../quotes/quote';
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButton from '../weather/topButton';
import Input from "../weather/input.jsx"
import TimeAndLocation from "../weather/TimeAndLocation.jsx"
import TemperatureAndDetails from "../weather/TemperatureAndDetails.jsx"
// import Forecast from "../weather/Forecast.jsx"
import { Link } from "react-router-dom"
// import getWeatherData from '../services/servics';
import { ToastContainer, toast } from "react-toastify";
import getFormattedWeatherData from '../services/servics';


const Index = () => {

    // const fetchWeather = async() => {
    //     const data = getFormattedWeatherData({q:"varanasi"})
    //     console.log(data);
    // }

    // fetchWeather()

    const [query, setQuery] = useState({ q: "berlin" });
    const [units, setUnits] = useState("metric");
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const message = query.q ? query.q : "current location.";
    
            toast.info("Fetching weather for " + message);
    
            await getFormattedWeatherData({ ...query, units }).then((data) => {
            toast.success(
                `Successfully fetched weather for ${data.name}, ${data.country}.`
            );
    
            setWeather(data);
            });
        };
    
        fetchWeather();
        }, [query, units]);
    
    // const formatBackground = () => {
    //     if (!weather) return "from-cyan-700 to-blue-700";
    //     const threshold = units === "metric" ? 20 : 60;
    //     if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";
    
    //     return "from-yellow-700 to-orange-700";
    // };


    return (
        <div className='container h-100'>
            <div className='row'>
                <Quote/>
                <div className='col-4 p-3'>
                    <Weather/>
                    {weather && (
                        <div>
                            <TimeAndLocation weather={weather} />
                            {/* <TemperatureAndDetails weather={weather} /> */}
                        </div>
                    )}
                </div>
                <div className='col-7 h-90'>
                    {/* <UilReact size={50} /> */}
                    <TopButton setQuery={setQuery}/>
                    <Input setQuery={setQuery} units={units} setUnits={setUnits}/>
                    {weather && (
                        <div>
                            {/* <TimeAndLocation weather={weather} /> */}
                            <TemperatureAndDetails weather={weather} />
                            {/* <Forecast title="hourly forecast" items={weather.hourly} /> */}
                            {/* <Forecast title="daily forecast" items={weather.daily} />  */}
                        </div>
                    )}
                    <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
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
