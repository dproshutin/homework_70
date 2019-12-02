import {ADD, RESULT, REMOVE, REMOVE_ALL, SQUARE} from "./actionTypes";

const initialState = {
    result: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {result: state.result + action.value};
        case RESULT:
            try {
                const find = '\\^';
                const re = new RegExp(find, 'g');
                if (state.result.charCodeAt(0) === 0x221A && state.result.slice(1) >=0) {
                    return {result: Math.sqrt(state.result.slice(1)) + action.value};
                }
                return {result: eval(state.result.replace(re, "**")) + action.value};
            } catch(e) {
                console.log('Error!');
                return {result: "ERROR"};
            }
        case REMOVE:
            return {result: state.result.slice(0, -1)};
        case REMOVE_ALL:
            return {result: ""};
        case SQUARE:
            return {result: eval(state.result) + "^2"};
        default:
            return state;
    }
};

export default reducer;