const initialState = {
    result: ""
};

const reducer = (state = initialState, action) => {
    if (action.type === "ADD") {
        return {result: state.result + action.value};
    }
    if (action.type === "RESULT") {
        try {
            if (state.result.charCodeAt(0) === 0x221A && state.result.slice(1) >=0) {
                return {result: Math.sqrt(state.result.slice(1)) + action.value};
            }
            return {result: eval(state.result) + action.value};
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
    return state;
};

export default reducer;