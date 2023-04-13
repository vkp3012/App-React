import React from 'react'
import { iconUrlFromCode } from "../services/servics";

const Forecast = ({ title,items }) => {
  return (
    <div>
      <div className="flex items-center justify-start">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">
        {/* <div
          // key={index}
          className="flex flex-col items-center justify-center"
        >
          <p className="font-light text-sm">4:30 PM</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1204/1204721.png"
            className="w-12 my-1"
            alt=""
          />
          <p className="font-medium">32°</p>
        </div>
        <div
          // key={index}
          className="flex flex-col items-center justify-center"
        >
          <p className="font-light text-sm">4:30 PM</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1204/1204721.png"
            className="w-12 my-1"
            alt=""
          />
          <p className="font-medium">32°</p>
        </div>
        <div
          // key={index}
          className="flex flex-col items-center justify-center"
        >
          <p className="font-light text-sm">4:30 PM</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1204/1204721.png"
            className="w-12 my-1"
            alt=""
          />
          <p className="font-medium">32°</p>
        </div>
        <div
          // key={index}
          className="flex flex-col items-center justify-center"
        >
          <p className="font-light text-sm">4:30 PM</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1204/1204721.png"
            className="w-12 my-1"
            alt=""
          />
          <p className="font-medium">32°</p>
        </div>
        <div
          // key={index}
          className="flex flex-col items-center justify-center"
        >
          <p className="font-light text-sm">4:30 PM</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1204/1204721.png"
            className="w-12 my-1"
            alt=""
          />
          <p className="font-medium">32°</p>
        </div> */}
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forecast
