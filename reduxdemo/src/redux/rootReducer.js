import { combineReducers } from 'redux'
import BatReducer from './batReduce'
import BallReducer from './ballReduce'
import VegtableReducer from './vegReduce'

const rootReducer = combineReducers({
    bat : BatReducer,
    ball : BallReducer,
    vegtable : VegtableReducer
})

export default rootReducer 