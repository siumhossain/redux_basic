import counterReducer from "./counter";
import isloggedReducer from "./islogged";

//for combining 2 reducers;;;;;;
import { combineReducers } from 'redux';



const allReducers = combineReducers({
    counterReducer : counterReducer,
    isloggedReducer : isloggedReducer
})


export default allReducers;