import counterReducer from './counter-reducer'
import { combineReducers } from 'redux'

const reducers = combineReducers({
    counterReducer
});

export default reducers;