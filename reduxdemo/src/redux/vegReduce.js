const initialState = {
    vegtables : 50
}

const VegtableReducer = (state = initialState,action) => {
   switch(action.type){
    case "BUY_VEG":
        return {...state,vegtables:state.vegtables - action.payload}
    case "SELL_VEG":
        return {...state,vegtables:state.vegtables + 1}
    default:
        return state;
   }
}

export default VegtableReducer;