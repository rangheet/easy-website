import React, { Component} from "react";
import {hot} from "react-hot-loader";
import PersonalInfo from "./personal-info/personal-info.jsx";

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