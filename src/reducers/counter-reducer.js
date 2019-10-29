import { INCREMENT, DECREMENT } from "../constants";

const initialState = {
    counter: 0 
}

function counterReducer(state = initialState, action) {        
    switch(action.type) {
        case INCREMENT: {
            state = { counter: state.counter + 1}              
            break;
        }
        case DECREMENT: {
            state = { counter: state.counter - 1}
            break;
        }
        default: {
            break;
        }
    }    
    return state
}

export default counterReducer;