import React from 'react'
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";
// import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

const TemperatureAndDetails = () => {
    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                {/* <p>{details}</p> */}
                Cloudy or whatever
            </div>

        <div className="flex flex-row items-center justify-between text-white py-3">
            <img 
                src="https://cdn-icons-png.flaticon.com/512/1204/1204721.png"
                alt="" 
                className="w-20" 
            />
            <p className="text-5xl">32°</p>
            <div className="flex flex-col space-y-2">
                <div className="flex font-light text-sm items-center justify-center">
                    <UilTemperature size={18} className="mr-1" />
                    Real fell:32°
                    <span className="font-medium ml-1"></span>
                </div>
                <div className="flex font-light text-sm items-center justify-center">
                    <UilTear size={18} className="mr-1" />
                    Humidity: 65%
                    <span className="font-medium ml-1"></span>
                </div>
                <div className="flex font-light text-sm items-center justify-center">
                    <UilWind size={18} className="mr-1" />
                    Wind:30 km/h
                    <span className="font-medium ml-1"></span>
                </div>
            </div>
        </div>

        <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
            <UilSun />
            <p className="font-light">
            Rise:5:30 am
            <span className="font-medium ml-1">
                {/* {formatToLocalTime()} */}
            </span>
            </p>
            <p className="font-light">|</p>

            <UilSunset />
            <p className="font-light">
            Set:7:05 pm
            <span className="font-medium ml-1">
                {/* {formatToLocalTime()} */}
            </span>
            </p>
            <p className="font-light">|</p>

            <UilSun />
            <p className="font-light">
            High: 42°
            <span className="font-medium ml-1"></span>
            </p>
            <p className="font-light">|</p>

            <UilSun />
            <p className="font-light">
            Low:22°
            <span className="font-medium ml-1"></span>
            </p>
        </div>
        </div>
    )
}

export default TemperatureAndDetails
