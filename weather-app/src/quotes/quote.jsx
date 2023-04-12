import React, { useEffect, useState } from 'react'
import { getQuotes } from './api'
import Quotes from './quotes'
const Quote = () => {
    const [data,setData] = useState(null)

    useEffect(()=>{
        getQuotes().then((data)=>setData(data));
    },[])

    return (
        <div>
            <p className='d-flex justify-content-center m-2'>
                {
                    data && <Quotes data={data}/>
                }
            </p>
        </div>
    )
}

export default Quote
