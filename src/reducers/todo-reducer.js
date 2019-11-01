import { ADD_TODO, REMOVE_TODO, CHANGE_TODO } from "../constants";


const initialState = {
    value: []
}

//export default function todoReducer(state = initialState, action) {
export default function todoReducer(state = initialState, {type, payload}) {
    switch(type) {
        case ADD_TODO: {
            return { value: [...state.value, payload] };            
        } 
        case CHANGE_TODO: {            
            return { value : state.value.map((v) => {                
                return v.id === payload.id 
                    ? {...v, done: !v.done}
                    : v;
            })};            
        }
        case REMOVE_TODO: {
            break;
        }
        default: {
            return state;            
        }
    }
}