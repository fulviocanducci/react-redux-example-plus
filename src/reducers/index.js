import { combineReducers } from 'redux';

import counterReducer from './counter-reducer';
import nameReducer from './name-reducer';
import todoReducer from './todo-reducer';

//Combine Reducers
const reducers = combineReducers({
    counter: counterReducer,
    name: nameReducer, 
    todo: todoReducer
});

export default reducers;