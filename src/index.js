import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import MainComponent from "./main-component.jsx";
//import { store } from "./store";

ReactDOM.render(
    //<Provider store={store}>
        <MainComponent />
    //</Provider>
    ,document.getElementById("root"));