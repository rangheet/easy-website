import React, { Component} from "react";
import {hot} from "react-hot-loader";
import PersonalInfo from "./component/personal-info/personal-info.jsx";
import "./main-component.css";

class MainComponent extends Component{
  render(){
    return(
      <div className="MainComponent">
        <h1> Hello, Sherlock!</h1>
        <PersonalInfo/>
      </div>
    );
  }
}

export default hot(module)(MainComponent);