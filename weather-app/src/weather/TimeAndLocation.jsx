import React from 'react'
import { formatToLocalTime } from "../services/servics";

const TimeAndLocation = ({ weather: { dt, timezone, name, country } }) => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center">
          <p className="text-white text-xl font-extra-light">
            {formatToLocalTime(dt, timezone)}
          </p>
        </div>

        <div className="flex items-center justify-center my-3">
          <p className="text-white text-3xl font-medium">
            {`${name}, ${country}`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TimeAndLocation
