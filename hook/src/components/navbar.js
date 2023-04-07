import React from 'react'
import { Link } from 'react-router-dom'
import Statehook from '../stateHook/statehook';
import ReducerHook from '../reducer/reducerHook';
import UseEffectHook from '../useEffect/useEffectHook';
import RefHook from '../refHook/refHook';
import LayoutEffect from '../layoutEffect/layoutEffect';
import ImperativeHandle from '../imperativeHandle/impertiveHandle';
import ContextHook from '../contextHook/contextHook';
import MemoHook from '../memoHook/memoHook';
import Todo from '../todo/todo';
const Navbar = () => {
    return (
        <div className='d-flex bg-secondary justify-content-between align-items-center'>
            <h1 className='p-3 text-dark'>Hook Study Material</h1>
            <div className='p-3 dropdown'>
                    <button className='btn btn-secondary dropdown-toggle' type='button' id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        All Hooks
                    </button>
                <ul className="dropdown-menu dropdown-menu-dark" area-labelledby ="dropdownMenuButton2" style={{textDecoration:"none",color:"white"}}>
                    <Link to = "/" style={{textDecoration:"none",color:"white"}}>
                        UseState
                        <span>{Statehook} </span>
                    </Link>
                    <Link to = "/reducer" style={{textDecoration:"none",color:"white"}}>
                        Reducer
                        <span>{ReducerHook} </span>
                    </Link>
                    <Link to = "/useEffect" style={{textDecoration:"none",color:"white"}}>
                        UseEffect
                        <span>{UseEffectHook} </span>
                    </Link>
                    <Link to = "/refHook" style={{textDecoration:"none",color:"white"}}>
                        RefHook
                        <span>{RefHook} </span>
                    </Link>
                    <Link to = "/layouteffect" style={{textDecoration:"none",color:"white"}}>
                        LayoutEffect
                        <span>{LayoutEffect} </span>
                    </Link>
                    <Link to = "/imperativeHandle" style={{textDecoration:"none",color:"white"}}>
                        ImperativeHandle
                        <span>{ImperativeHandle} </span>
                    </Link>
                    <Link to = "/contextHook" style={{textDecoration:"none",color:"white"}}>
                        ContextHook
                        <span>{ContextHook} </span>
                    </Link>
                    <Link to = "/memoHook" style={{textDecoration:"none",color:"white"}}>
                        MemoHook
                        <span>{MemoHook} </span>
                    </Link>
                </ul>

                <Link to = "/todo" style={{textDecoration:"none",color:"white"}}>
                        Todo
                        <span>{Todo} </span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
