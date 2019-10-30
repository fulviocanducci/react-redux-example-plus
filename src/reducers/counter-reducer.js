import { INCREMENT, DECREMENT } from "../constants";

const initialState = {
    value: 0 
}

//function counterReducer(state = initialState, action) {
function counterReducer(state = initialState, { type }) {        
    switch(type) {
        case INCREMENT: {
            state = { value: state.value + 1}              
            break;
        }
        case DECREMENT: {
            state = { value: state.value - 1}
            break;
        }
        default: {
            break;
        }
    }    
    return state
}

export default counterReducer;