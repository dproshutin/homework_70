const initialState = {
    result: ""
};

const reducer = (state = initialState, action) => {
    if (action.type === "ADD") {
        return {result: state.result + action.value};
    }
    if (action.type === "RESULT") {
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
    }
    if (action.type === "REMOVE") {
        return {result: state.result.slice(0, -1)};
    }
    if (action.type === "REMOVE_ALL") {
        return {result: ""};
    }
    if (action.type === "SQUARE") {
        return {result: eval(state.result) + "^2"};
    }
    return state;
};

export default reducer;