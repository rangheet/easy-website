import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Root from "./main-component.jsx";
import { store } from "./store";
import { HashRouter } from "react-router-dom";
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Root/>
        </HashRouter>
    </Provider>,
    document.getElementById("root"));
