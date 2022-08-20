import React, { useReducer } from 'react'

const reducer = (state,action) =>{
    switch(action.type){
        case "Increment":
            return {count :state.count + 1,showText:state.showText};
        case "toggleShowtext":
            return {count : state.count,showText: !state.showText};
        default:
            return state;
    }
}

function RuducerHook() {
    // const [count ,setCount] = useState(0);
    // const [showText,setShowText] = useState(true);
    const [state,dispatch] = useReducer(reducer,{count:0,showText:true})
  return (
    <div>
        <h1>{state.count}</h1>
        <button
            onClick={() => {
                // setCount(count+1);
                // setShowText(!showText)
                dispatch({type:"Increment"})
                dispatch({type:"toggleShowtext"})
            }}
        >
            Click Here
        </button>
        {state.showText && <p>This is a text.</p>}
    </div>
  )
}

export default RuducerHook