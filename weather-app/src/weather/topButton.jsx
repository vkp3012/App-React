import React from 'react'

const TopButton = ({ setQuery }) => {
    const cities = [
        {
            id: 1,
            title: "London",
        },
        {
            id: 2,
            title: "Sydney",
        },
        {
            id: 3,
            title:"Tokyo",
        },
        {
            id: 4,
            title: "Toronto",
        },
        {
            id: 5,
            title: "Paris",
        },
    ];
    return (
        <div className='d-flex flex-row items-center justify-around'>
            {cities.map((city)=>(
                <button
                    key={city.id}
                    className='text-white text-lg font-medium'
                    style={{
                        background:"none",
                    }}
                    onClick={() => setQuery({ q: city.title })}
                >
                    {city.title}
                </button>
            ))}
        </div>
    )
}

export default TopButton
