import React, { useReducer } from 'react'

const reducer = (state,action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "Increment":
            return {count : state.count+1,showtext:state.showtext};
        case "toggleShowcase":
            return {count : state.count,showtext:!state.showtext};
        default:
            return state;          
    }
}

const ReducerHook = () => {
    const [state,dispatch] = useReducer(reducer,{count:0,showtext:true})
    
    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <h1>{state.count}</h1>
            <button
                onClick={()=>{
                    dispatch({type:"Increment"})
                    dispatch({type:"toggleShowcase"})
                }}
            >
                Click Here
            </button>
            { state.showtext && <p className='fs-3 p-5 fw-bold'>This is a text</p>}
        </div>
    )
}

export default ReducerHook
