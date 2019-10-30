import { CHANGE_NAME } from "../constants"

const initialState = {
    value: '' 
}

//export default function nameReducer(state = initialState, action) {
export default function nameReducer(state = initialState, {type, payload}) {
    switch(type) {
        case CHANGE_NAME: {
            state = {value: payload}
            break;
        } 
        default: {
            break;
        }
    }
    return state;
}