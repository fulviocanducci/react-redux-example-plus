import counterReducer from './counter-reducer';
import nameReducer from './name-reducer';
import { combineReducers } from 'redux';

//Combine Reducers
const reducers = combineReducers({
    counter: counterReducer,
    name: nameReducer
});

export default reducers;