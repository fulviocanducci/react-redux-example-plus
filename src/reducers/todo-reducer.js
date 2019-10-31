import { ADD_TODO, REMOVE_TODO, CHANGE_TODO } from "../constants";


const initialState = {
    value: []
}

//export default function todoReducer(state = initialState, action) {
export default function todoReducer(state = initialState, {type, payload}) {
    switch(type) {
        case ADD_TODO: {
            state = { value: [...state.value, payload] };
            break;
        } 
        case CHANGE_TODO: {
            break;
        }
        case REMOVE_TODO: {
            break;
        }
        default: {
            break;
        }
    }
    return state;
}