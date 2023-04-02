import React from 'react'
import { Link } from 'react-router-dom'
import Statehook from '../stateHook/statehook';
import ReducerHook from '../reducer/reducerHook';
const Navbar = () => {
    return (
        <div className='d-flex bg-info justify-content-between align-items-center'>
            <h1 className='p-3 text-light'>Hook Study Material</h1>
            <div className='p-3'>
                <ul className="fs-3 fw-bolder">
                    <Link to = "/">
                        UseState
                        <span>{Statehook} </span>
                    </Link>
                    <Link to = "/reducer">
                        Reducer
                        <span>{ReducerHook} </span>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
