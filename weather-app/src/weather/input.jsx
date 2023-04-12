import React from 'react'
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

const Input = () => {
    return (
        <div className="flex flex-row justify-center">
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
            <input
                // value={city}
                // onChange={(e) => setCity(e.currentTarget.value)}
                type="text"
                placeholder="Search for city...."
                className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
            />
            <UilSearch
                size={25}
                className="text-white cursor-pointer transition ease-out hover:scale-125"
                // onClick={handleSearchClick}
            />
            <UilLocationPoint
                size={25}
                className="text-white cursor-pointer transition ease-out hover:scale-125"
                // onClick={handleLocationClick}
            />
            </div>
    
            <div className="flex flex-row w-1/4 items-center justify-center">
                <button
                    style={{
                        background:"none",
                        width:0,
                        padding:0,
                        // margin:0,
                        borderRadius:"none"
                    }}
                    name="metric"
                    className="text-xl text-white font-light transition ease-out hover:scale-125"
                    // onClick={handleUnitsChange}
                >
                    °C
                </button>
                <p className="text-xxl text-white mx-1">|</p>
                <button
                    style={{
                        background:"none",
                        width:0,
                        padding:0,
                        margin:0,
                        borderRadius:"none"
                    }}
                    name="imperial"
                    className="text-xl text-white font-light transition ease-out hover:scale-125"
                    // onClick={handleUnitsChange}
                >
                    °F
                </button>
            </div>
        </div>
    )
}

export default Input
