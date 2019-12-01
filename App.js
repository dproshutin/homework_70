import React, {Component} from 'react';
import {Provider} from "react-redux";
import Calculator from "./containers/Calculator/Calculator";
import reducer from "./store/reducer";
import {createStore} from "redux";

const store = createStore(reducer);
class App extends Component {
    render() {
        return (
            <Provider store = { store }>
                <Calculator />
            </Provider>
        );
    }
}

export default App

